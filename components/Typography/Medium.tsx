"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const Medium = styled.p`
  font-size: 26px;
  letter-spacing: -0.01em;
  line-height: 1.2em;
  color: ${colors.white};
  max-width: 700px;
  &.wide {
    max-width: 1000px;
  }
  &.no-max-width {
    max-width: unset;
  }
  &.indent {
    text-indent: 4em;
  }
  &.two-columns {
    column-count: 2;
    column-gap: ${spaces.xl}px;
    ${breakpoint.phone} {
      column-count: unset;
      column-gap: unset;
    }
  }
  &.uppercase {
    text-transform: uppercase;
    line-height: 1.3em;
  }
  ${breakpoint.monitor} {
    font-size: 40px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 24px;
    max-width: 500px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 21px;
    max-width: 450px;
  }
  ${breakpoint.smallPhone} {
    font-size: 16px;
  }
  ${addColorClasses()}
`;
