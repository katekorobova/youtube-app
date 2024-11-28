import videos from "../data/videos";
import { VideoQuery } from "../lib/types";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  items: T[];
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

const useVideos = (videoQuery: VideoQuery) => {
  const [data, setData] = useState<Video[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (videoQuery.searchText) {
      setError("");
      setIsLoading(true);
      apiClient
        .get<FetchResponse<Video>>("/search", {
          signal: controller.signal,
          params: {
            part: "snippet",
            type: "video",
            order: videoQuery.order,
            publishedAfter: videoQuery.publishedAfter,
            publishedBefore: videoQuery.publishedBefore,
            q: videoQuery.searchText,
            maxResults: 50,
          },
        })
        .then((res) => {
          setData(res.data.items);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    }
  }, [videoQuery]);

  return { data, error, isLoading };

  // return { data: videos as Video[], isLoading: false, error: null };
};

export default useVideos;
