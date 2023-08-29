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
  ${breakpoint.phone} {
    padding: ${spaces.xxxl}px ${spaces.m}px 0;
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.xxl}px ${spaces.s}px 0;
  }
  ${breakpoint.monitor} {
    padding: ${2 * spaces.xxxxl}px ${spaces.xl}px 0;
  }
`;

export const ProductsPageHero = styled.div`
  display: flex;
  column-gap: ${spaces.xxl}px;
  justify-content: space-between;
  ${breakpoint.phone} {
    flex-direction: column;
    row-gap: ${spaces.l}px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  margin-top: ${spaces.xxxl}px;
  row-gap: ${spaces.xxxl}px;
  ${breakpoint.phone} {
    margin: ${spaces.xxl}px 0;
    row-gap: ${spaces.xxl}px;
  }
  ${breakpoint.smallPhone} {
    margin-top: ${spaces.xl}px;
    row-gap: ${spaces.xl}px;
  }
  ${breakpoint.monitor} {
    margin-top: ${spaces.xxxxl}px;
  }
`;
