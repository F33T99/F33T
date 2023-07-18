"use client";

import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";
import { colors } from "../../../consts/colors";

export const burgerWidth = 50;
export const burgerWidthSmall = 30;
export const StyledBurger = styled.div`
  display: none;
  ${breakpoint.tabletPortrait} {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999999;
    height: 100%;
    width: ${burgerWidth}px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.yellow400};
    svg {
      width: 36px;
      height: auto;
    }
    line {
      stroke: ${colors.black};
    }
  }
  ${breakpoint.smallPhone} {
    width: ${burgerWidthSmall}px;
    svg {
      width: 21px;
    }
  }
`;

export const BurgerSvg = styled.svg``;
