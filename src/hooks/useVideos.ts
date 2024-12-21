import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useAxiosAuthorized from "./useAxiosAuthorized";
import { VideoQuery } from "../lib/types";
import useAuth from "./useAuth";
import axios from "../api/axios";
import { SEARCH_AUTH_URL, SEARCH_URL } from "../lib/constants";
// import videos from "../data/videos";

interface SearchResponse {
  items: Video[];
}

export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

const useVideos = (query?: VideoQuery) => {
  const axiosAuthorized = useAxiosAuthorized();

  const [data, setData] = useState<Video[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isExecuted, setIsExecuted] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    if (!query) return;

    const fetchVideos = async () => {
      setIsLoading(true);
      setError(undefined);
      const controller = new AbortController();

      const fetch = () => {
        if (auth)
          return axiosAuthorized.post<SearchResponse>(SEARCH_AUTH_URL, query, {
            signal: controller.signal,
          });
        else
          return axios.post<SearchResponse>(SEARCH_URL, query, {
            signal: controller.signal,
          });
      };

      try {
        const response = await fetch();
        setData(response.data.items);
      } catch (error: any) {
        if (error instanceof CanceledError) return;
        setError(error?.message || "An error occurred while fetching videos.");
        console.error(error);
      } finally {
        setIsLoading(false);
        setIsExecuted(true);
      }
      return () => controller.abort();
    };
    fetchVideos();
  }, [query]);

  return { data, error, isLoading, isExecuted };

  // return { data: videos as Video[], isLoading: false, error: null };
};

export default useVideos;
