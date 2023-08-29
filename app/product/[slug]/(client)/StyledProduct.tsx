"use client";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../../../consts/colors";
import Image from "next/image";
import { spaces } from "../../../../consts/spaces";
import { breakpoint } from "../../../../consts/breakpoints";

export const GlobalProduct = createGlobalStyle`
  body {
    background-color: ${colors.gray300};
  }
`;

export const StyledProduct = styled.div`
  margin-top: ${spaces.xxxl}px;
  ${breakpoint.phone} {
    margin-top: ${spaces.xl}px;
  }
  ${breakpoint.monitor} {
    margin-top: ${spaces.xxxxl}px;
  }
`;

export const ProductCover = styled(Image)`
  display: none;
  ${breakpoint.tabletPortrait} {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    grid-area: cover;
    padding: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    padding: ${spaces.m}px;
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.xs}px;
  }
`;

export const ProductContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 6fr 5fr;
  grid-template-areas: "gallery info";
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-template-areas: "cover" "info" "gallery";
    row-gap: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    row-gap: ${spaces.l}px;
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  row-gap: ${spaces.xl}px;
  align-content: start;
  justify-items: start;
  padding: 0 ${spaces.l}px;
  grid-area: info;
  ${breakpoint.monitor} {
    row-gap: ${spaces.xxl}px;
  }
  ${breakpoint.phone} {
    padding: ${spaces.m}px;
    row-gap: ${spaces.m}px;
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.xs}px;
  }
`;

export const Benefits = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  margin-top: ${spaces.l}px;
`;

export const BenefitsInner = styled.div`
  display: flex;
  column-gap: ${spaces.l}px;
  overflow: hidden;
  ${breakpoint.phone} {
    flex-direction: column;
    row-gap: ${spaces.m}px;
  }
`;

export const Benefit = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
  align-content: start;
  ${breakpoint.phone} {
    justify-content: flex-start;
    justify-items: start;
  }
`;
