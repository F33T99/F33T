import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "title ." "quantity price";
  row-gap: ${spaces.m}px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  column-gap: ${spaces.m}px;
  align-items: center;
`;

export const CartItemSize = styled.div`
  /* display: flex; */
`;
