import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledProductCard = styled.div`
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
