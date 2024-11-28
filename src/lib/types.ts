export interface VideoQuery {
  searchText: string;
  category: number | null;
  order: string | null;
  locationData: LocationData | null;
  publishedAfter: Date | null;
  publishedBefore: Date | null;
}

export interface LocationData {
  location: string;
  locationRadius: string;
}
