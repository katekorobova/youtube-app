export interface VideoQuery {
  searchText: string;
  category: number | null;
  order: string | null;
  publishedAfter: Date | null;
  publishedBefore: Date | null;
}
