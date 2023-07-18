"use client";

import { createGlobalStyle } from "styled-components";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Matter, Arial, sans-serif;
    font-weight: 400;
  }
  body {
    background-color: ${colors.black};
    padding: 0 ${spaces.l}px;
  }
  @font-face {
    font-family: 'Matter';
    src: url('../fonts/Matter-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;
