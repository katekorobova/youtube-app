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
  timeZone: "UTC",
} as Intl.DateTimeFormatOptions;
