"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Nano = styled.p`
  font-size: 12px;
  letter-spacing: 0em;
  line-height: 1.3em;
  color: ${colors.white};
  max-width: 400px;
  &.uppercase {
    text-transform: uppercase;
    letter-spacing: 0.03em;
    line-height: 1.9em;
  }
  &.tar {
    text-align: right;
  }
  ${breakpoint.monitor} {
    font-size: 16px;
  }
  ${addColorClasses()}
`;
