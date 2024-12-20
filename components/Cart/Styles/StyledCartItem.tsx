import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "title ." "quantity price";
  row-gap: ${spaces.m}px;
  ${breakpoint.phone} {
    align-items: end;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  column-gap: ${spaces.m}px;
  align-items: center;
  ${breakpoint.phone} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartItemSize = styled.div`
  /* display: flex; */
`;
