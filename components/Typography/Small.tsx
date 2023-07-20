"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const Small = styled.p`
  font-size: 21px;
  letter-spacing: 0.02em;
  line-height: 1.4em;
  color: ${colors.white};
  max-width: 600px;
  &.indent {
    text-indent: 4em;
  }
  &.no-max-width {
    max-width: unset;
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
  }
  ${breakpoint.monitor} {
    font-size: 26px;
    max-width: 800px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 18px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 14px;
    max-width: 500px;
  }
  ${breakpoint.smallPhone} {
    font-size: 12px;
  }
  ${addColorClasses()}
`;
