"use client";
import styled from "styled-components";
import { spaces } from "../../../../consts/spaces";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledAddToCart = styled.div`
  display: grid;
  justify-self: end;
  row-gap: ${spaces.l}px;
  ${breakpoint.phone} {
    justify-self: start;
    justify-items: start;
    row-gap: ${spaces.l}px;
  }
`;

export const VariantsContainer = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  ${breakpoint.phone} {
    row-gap: ${spaces.xxs}px;
  }
`;

export const Cta = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  ${breakpoint.phone} {
    row-gap: ${spaces.xxs}px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
`;
