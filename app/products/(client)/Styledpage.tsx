"use client";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";

export const GlobalProducts = createGlobalStyle`
  body {
    background-color: ${colors.gray300};
  }
`;

export const StyledProductPage = styled.div`
  padding: ${spaces.xxxxl}px ${spaces.l}px 0;
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
`;
