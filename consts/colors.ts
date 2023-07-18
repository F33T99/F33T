export const colors = {
  beige400: "#ECDED4",
  beige500: "#BEADA2",
  red400: "#FD0000",
  green400: "#2F6C33",
  violet400: "#C030FF",
  yellow400: "#FFCF00",
  blue400: "#42BEFF",
  black: "#000000",
  white: "#FFFFFF",
} as const;

export type ColorKeys = keyof typeof colors;
export type ColorKeysArray = ColorKeys[];
export type ColorValues = (typeof colors)[ColorKeys];
