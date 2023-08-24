export const colors = {
  beige400: "#ECDED4",
  beige500: "#BEADA2",
  red400: "#FD0000",
  red300: "#FF5555",
  red200: "#FF9393",
  green400: "#2F6C33",
  violet400: "#C030FF",
  yellow400: "#FFCF00",
  blue400: "#42BEFF",
  black: "#000000",
  white: "#FFFFFF",
  gray1000: "#161616",
  gray900: "#262626",
  gray800: "#393939",
  gray700: "#525252",
  gray600: "#6f6f6f",
  gray500: "#8d8d8d",
  gray400: "#a8a8a8",
  gray300: "#c6c6c6",
  gray200: "#e0e0e0",
  gray100: "#f4f4f4",
} as const;

export type ColorKeys = keyof typeof colors;
export type ColorKeysArray = ColorKeys[];
export type ColorValues = (typeof colors)[ColorKeys];
