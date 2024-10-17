"use client";

import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";
import { colors } from "../../../../consts/colors";
import { spaces } from "../../../../consts/spaces";

export const GlobalProduct = createGlobalStyle`
  body {
    background-color: ${colors.gray300};
  }
`;

export const StyledProduct = styled.div`
  padding-top: ${spaces.xxxl}px;
  ${breakpoint.phone} {
    padding-top: ${spaces.xl}px;
  }
  ${breakpoint.monitor} {
    padding-top: ${spaces.xxxxl}px;
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
  }
`;

export const ProductDescription = styled.div`
  margin-top: ${spaces.xl}px;
  ${breakpoint.tabletLandscape} {
    margin-top: ${spaces.m}px;
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
    padding: ${spaces.m}px;
  }
  ${breakpoint.phone} {
    padding: ${spaces.s}px;
    row-gap: ${spaces.l}px;
  }
`;

export const Reviews = styled.div`
  display: grid;
  row-gap: ${spaces.xl}px;
  margin-top: ${spaces.xxl}px;
  max-width: 90%;
  ${breakpoint.monitor} {
    margin-top: ${spaces.xxxl}px;
  }
  ${breakpoint.phone} {
    max-width: unset;
    row-gap: ${spaces.l}px;
    margin-top: ${spaces.xl}px;
  }
`;

export const Review = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const ProductInfo = styled.div`
  display: grid;
  align-content: start;
  justify-items: start;
  grid-area: info;
  padding: 0 ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    padding: 0;
  }
`;

export const Benefits = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  margin-top: ${spaces.xl}px;
  ${breakpoint.monitor} {
    margin-top: ${spaces.xxl}px;
  }
`;

export const BenefitsInner = styled.div`
  display: flex;
  column-gap: ${spaces.l}px;
  overflow: hidden;
  ${breakpoint.phone} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: ${spaces.m}px;
    column-gap: ${0}px;
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
