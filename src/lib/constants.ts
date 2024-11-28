export const GRID_SPACING = 4;
export const GRID_COLUMNS = { base: 1, sm: 2, md: 3, lg: 4, xl: 5 };

export const SEARCH_BORDER_RADIUS = 20;
export const FILTER_BORDER_RADIUS = SEARCH_BORDER_RADIUS;

export const SELECTOR_DATE_FORMAT = "MMMM dd, yyyy";
export const DATE_FORMAT_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
} as Intl.DateTimeFormatOptions;

export const VIDEO_CATEGORIES = [
  { value: null, label: "Any" },
  { value: 1, label: "Film & Animation" },
  { value: 2, label: "Autos & Vehicles" },
  { value: 10, label: "Music" },
  { value: 15, label: "Pets & Animals" },
  { value: 17, label: "Sports" },
  { value: 18, label: "Short Movies" },
  { value: 19, label: "Travel & Events" },
  { value: 20, label: "Gaming" },
  { value: 21, label: "Videoblogging" },
  { value: 22, label: "People & Blogs" },
  { value: 23, label: "Comedy" },
  { value: 24, label: "Entertainment" },
  { value: 25, label: "News & Politics" },
  { value: 26, label: "Howto & Style" },
  { value: 27, label: "Education" },
  { value: 28, label: "Science & Technology" },
  { value: 29, label: "Nonprofits & Activism" },
  { value: 30, label: "Movies" },
  { value: 31, label: "Anime/Animation" },
  { value: 32, label: "Action/Adventure" },
  { value: 33, label: "Classics" },
  { value: 34, label: "Comedy" },
  { value: 35, label: "Documentary" },
  { value: 36, label: "Drama" },
  { value: 37, label: "Family" },
  { value: 38, label: "Foreign" },
  { value: 39, label: "Horror" },
  { value: 40, label: "Sci-Fi/Fantasy" },
  { value: 41, label: "Thriller" },
  { value: 42, label: "Shorts" },
  { value: 43, label: "Shows" },
  { value: 44, label: "Trailers" },
];

export const SORT_ORDERS = [
  { value: null, label: "Relevance" },
  { value: "date", label: "Upload date" },
  { value: "viewCount", label: "View count" },
  { value: "rating", label: "Rating" },
  { value: "title", label: "Title" },
];

export const LOCATIONS = [
  { value: null, label: "Any" },
  {
    value: { location: "-33.8,151", locationRadius: "60km" },
    label: "Sydney",
  },
  {
    value: { location: "-37.9,145", locationRadius: "60km" },
    label: "Melbourne",
  },
  {
    value: { location: "-34.5, 148.9", locationRadius: "25km" },
    label: "Brisbane",
  },
  {
    value: { location: "-34.9, 138.6", locationRadius: "60km" },
    label: "Adelade",
  },
  {
    value: { location: "-32.1,115.9", locationRadius: "60km" },
    label: "Perth",
  },
  {
    value: { location: "-42,146.5", locationRadius: "300km" },
    label: "Tasmania",
  },
  {
    value: { location: "-42,172", locationRadius: "1000km" },
    label: "New Zealand",
  },
];
