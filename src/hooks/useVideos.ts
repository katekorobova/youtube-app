import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { VideoQuery } from "../lib/types";
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
  const axios = useAxiosPrivate();

  const [data, setData] = useState<Video[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(query);
    if (!query) return;

    const fetchVideos = async () => {
      const controller = new AbortController();
      setError(undefined);
      setIsLoading(true);

      try {
        const response = await axios.post<SearchResponse>("/search", query, {
          signal: controller.signal,
        });
        setData(response.data.items);
      } catch (error: any) {
        if (error instanceof CanceledError) return;
        setError(error?.message || "An error occurred while fetching videos.");
      } finally {
        setIsLoading(false);
      }
      return () => controller.abort();
    };
    fetchVideos();
  }, [query]);

  return { data, error, isLoading };

  // return { data: videos as Video[], isLoading: false, error: null };
};

export default useVideos;
