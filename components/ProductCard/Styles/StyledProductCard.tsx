import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import Link from "next/link";

export const StyledProductCard = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  row-gap: ${spaces.l}px;
  justify-items: center;
`;

export const ProductCardContent = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ProductCardHeader = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  column-gap: ${spaces.xl}px;
`;
