"use client";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";
import { breakpoint } from "../../../consts/breakpoints";

export const GlobalProducts = createGlobalStyle`
  body {
    background-color: ${colors.gray300};
  }
`;

export const StyledProductPage = styled.div`
  padding: ${spaces.xxxxl}px ${spaces.l}px 0;
  ${breakpoint.monitor} {
    padding: ${2 * spaces.xxxxl}px ${spaces.xl}px 0;
  }
`;

export const ProductsPageHero = styled.div`
  display: flex;
  column-gap: ${spaces.xxl}px;
  justify-content: space-between;
`;

export const ProductsGrid = styled.div`
  display: grid;
  margin-top: ${spaces.xxxl}px;
  row-gap: ${spaces.xxxl}px;
  ${breakpoint.monitor} {
    margin-top: ${spaces.xxxxl}px;
  }
`;
