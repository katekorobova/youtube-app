export const APP_NAME = "UwuTube";

export const NAV_BAR_HEIGHT = "64px";
export const NAV_BAR_SPACING = 4;

export const GRID_SPACING = 4;
export const GRID_COLUMNS = { base: 1, sm: 2, md: 3, lg: 4, xl: 5 };

export const FORM_WIDTH = "500px";

export const SKELETON_HEIGHT = "200px";
export const SKELETON_COUNT = 10;

export const HEADING_SIZE = "3xl";

export const INPUT_BORDER_RADIUS = 20;
export const BUTTON_BORDER_RADIUS = INPUT_BORDER_RADIUS;

export const HOME_PAGE = "/";
export const LOGIN_PAGE = "/login";
export const REGISTER_PAGE = "/register";
export const HISTORY_PAGE = "/history";

export const PROFILE_PAGE = "/profile";

export const DATE_FORMAT = "MMMM DD, yyyy";
export const DATE_TIME_FORMAT = "MMMM DD, yyyy HH:mm";
export const DATE_FORMAT_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
} as Intl.DateTimeFormatOptions;

export const VIDEO_CATEGORIES = [
  { value: undefined, label: "Any" },
  { value: "1", label: "Film & Animation" },
  { value: "2", label: "Autos & Vehicles" },
  { value: "10", label: "Music" },
  { value: "15", label: "Pets & Animals" },
  { value: "17", label: "Sports" },
  { value: "18", label: "Short Movies" },
  { value: "19", label: "Travel & Events" },
  { value: "20", label: "Gaming" },
  { value: "21", label: "Videoblogging" },
  { value: "22", label: "People & Blogs" },
  { value: "23", label: "Comedy" },
  { value: "24", label: "Entertainment" },
  { value: "25", label: "News & Politics" },
  { value: "26", label: "Howto & Style" },
  { value: "27", label: "Education" },
  { value: "28", label: "Science & Technology" },
  { value: "29", label: "Nonprofits & Activism" },
  { value: "30", label: "Movies" },
  { value: "31", label: "Anime/Animation" },
  { value: "32", label: "Action/Adventure" },
  { value: "33", label: "Classics" },
  { value: "35", label: "Documentary" },
  { value: "36", label: "Drama" },
  { value: "37", label: "Family" },
  { value: "38", label: "Foreign" },
  { value: "39", label: "Horror" },
  { value: "40", label: "Sci-Fi/Fantasy" },
  { value: "41", label: "Thriller" },
  { value: "42", label: "Shorts" },
  { value: "43", label: "Shows" },
  { value: "44", label: "Trailers" },
];
export const DEFAULT_CATEGORY = "Any";

export const SORT_ORDERS = [
  { value: undefined, label: "Relevance" },
  { value: "date", label: "Upload date" },
  { value: "viewCount", label: "View count" },
  { value: "rating", label: "Rating" },
  { value: "title", label: "Title" },
];
export const DEFAULT_ORDER = "Relevance";

export const LOCATIONS = [
  { value: undefined, label: "Any" },
  { value: "SYDNEY", label: "Sydney" },
  { value: "MELBOURNE", label: "Melbourne" },
  { value: "BRISBANE", label: "Brisbane" },
  { value: "ADELAIDE", label: "Adelaide" },
  { value: "PERTH", label: "Perth" },
  { value: "TASMANIA", label: "Tasmania" },
  { value: "NEW_ZEALAND", label: "New Zealand" },
];
export const DEFAULT_LOCATION = "Any";
