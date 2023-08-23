"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";

export const StyledProductPage = styled.div`
  background-color: ${colors.gray300};
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
