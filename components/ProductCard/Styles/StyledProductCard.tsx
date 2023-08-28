import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import Link from "next/link";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledProductCard = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  row-gap: ${spaces.l}px;
  justify-items: center;
`;

export const ProductCardHeader = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  column-gap: ${spaces.xl}px;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: ${spaces.l}px;
  }
`;

export const ProductCardContent = styled.div`
  display: grid;
  grid-template-areas: "price variants button";
  align-items: end;
  width: 100%;
  ${breakpoint.tabletPortrait} {
    grid-template-areas: "price ." "variants button";
    row-gap: ${spaces.m}px;
  }
`;

export const ProductCardButton = styled.div`
  grid-area: button;
  ${breakpoint.tabletPortrait} {
    justify-self: end;
  }
`;

export const ProductCardVariants = styled.div`
  grid-area: variants;
  ${breakpoint.tabletPortrait} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductCardPrice = styled.div`
  grid-area: price;
`;
