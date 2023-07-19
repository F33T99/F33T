"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Mini = styled.p`
  font-size: 18px;
  letter-spacing: 0em;
  line-height: 1.3em;
  color: ${colors.white};
  max-width: 400px;
  &.break-lines {
    white-space: pre-line;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  ${breakpoint.monitor} {
    font-size: 21px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 16px;
  }
  ${breakpoint.smallPhone} {
    font-size: 12px;
  }
  &.navlink {
    ${breakpoint.tabletPortrait} {
      font-size: 40px;
      text-transform: uppercase;
    }
    ${breakpoint.smallPhone} {
      font-size: 24px;
    }
  }
  ${addColorClasses()}
`;
