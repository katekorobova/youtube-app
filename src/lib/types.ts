export interface VideoQuery {
    searchText: string;
    order: string;
    publishedAfter: Date | null;
    publishedBefore: Date | null;
  }