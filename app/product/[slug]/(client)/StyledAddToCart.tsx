"use client";
import styled from "styled-components";
import { spaces } from "../../../../consts/spaces";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledAddToCart = styled.div`
  display: grid;
  justify-self: end;
  margin-top: ${spaces.xl}px;
  ${breakpoint.monitor} {
    margin-top: ${spaces.xxl}px;
  }
  ${breakpoint.tabletLandscape} {
    justify-self: start;
    margin-top: ${spaces.l}px;
  }
  ${breakpoint.tabletPortrait} {
    justify-self: end;
    margin-top: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    justify-self: start;
    justify-items: start;
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
  margin-top: ${spaces.xl}px;
  ${breakpoint.tabletLandscape} {
    margin-top: ${spaces.l}px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  margin-bottom: ${spaces.xs}px;
`;
