"use client";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../../../consts/colors";
import Image from "next/image";

export const GlobalProduct = createGlobalStyle`
  body {
    background-color: ${colors.gray300};
  }
`;

export const StyledProduct = styled.div``;

export const Gallery = styled.div`
  position: sticky;
  top: 0;
`;

export const GalleryImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
`;

export const ProductInfo = styled.div`
  height: 300vh;
  background-color: ${colors.red300};
`;
