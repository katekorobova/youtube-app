export interface VideoQuery {
  q?: string;
  category?: string;
  order?: string;
  locationData?: string;
  publishedAfter?: Date;
  publishedBefore?: Date;
}

export interface HistoryItem {
  id: number;
  date: Date;
  query: VideoQuery;
}

export interface HistoryResponse {
  items: HistoryItem[];
}

export interface AuthData {
  username: string;
  accessToken: string;
}

export interface TokenResponse {
  username: string;
  accessToken: string;
}
