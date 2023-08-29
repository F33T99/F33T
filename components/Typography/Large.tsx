"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Large = styled.p`
  font-size: 50px;
  letter-spacing: -0.02em;
  line-height: 1.4em;
  color: ${colors.white};
  max-width: 800px;
  &.indent {
    text-indent: 4em;
    ${breakpoint.phone} {
      text-indent: 2em;
    }
  }
  &.tight-lineheight {
    line-height: 1em;
  }
  &.no-max-width {
    max-width: unset;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  ${breakpoint.monitor} {
    font-size: 70px;
    max-width: 1000px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 40px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 30px;
    max-width: 500px;
  }
  ${breakpoint.phone} {
    font-size: 18px;
    letter-spacing: 0.02em;
    &.price {
      font-size: 30px;
    }
  }
  ${breakpoint.smallPhone} {
    font-size: 14px;
  }
  ${addColorClasses()}
`;
