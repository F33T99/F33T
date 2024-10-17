import "react";

export type ThemeType = "light" | "dark";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    "data-theme"?: ThemeType;
    "data-background-color"?: ThemeType;
  }
}
