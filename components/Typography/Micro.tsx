"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Micro = styled.p`
  font-size: 14px;
  letter-spacing: 0em;
  line-height: 1.3em;
  color: ${colors.white};
  max-width: 400px;
  &.tac {
    text-align: center;
  }
  &.uppercase {
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  ${breakpoint.monitor} {
    font-size: 18px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 11px;
  }
  ${addColorClasses()}
`;