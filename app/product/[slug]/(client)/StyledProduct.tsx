"use client";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../../../consts/colors";
import Image from "next/image";
import { spaces } from "../../../../consts/spaces";

export const GlobalProduct = createGlobalStyle`
  body {
    background-color: ${colors.gray300};
  }
`;

export const StyledProduct = styled.div`
  margin-top: 10vh;
`;

export const Gallery = styled.div`
  position: sticky;
  top: 0vh;
  overflow: hidden;
  height: 100vh;
`;

export const GalleryInner = styled.div`
  display: grid;
  row-gap: 1px;
`;

export const GalleryImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 6fr 5fr;
`;

export const ProductInfo = styled.div`
  display: grid;
  row-gap: ${spaces.xxl}px;
  align-content: start;
  justify-items: start;
  /* background-color: ${colors.red300}; */
`;

export const Benefits = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
`;

export const BenefitsInner = styled.div`
  display: flex;
  column-gap: ${spaces.l}px;
  overflow: hidden;
`;

export const Benefit = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;
