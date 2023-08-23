"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledComponnentsThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const mainEl = document.querySelector("[data-theme]") as HTMLElement;
    setTheme(mainEl.dataset.theme);
  }, [pathname]);

  return (
    <StyledComponnentsThemeProvider theme={{ type: theme }}>
      {children}
    </StyledComponnentsThemeProvider>
  );
};

export default ThemeProvider;
