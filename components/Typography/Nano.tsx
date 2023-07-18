"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Nano = styled.p`
  font-size: 12px;
  letter-spacing: 0em;
  line-height: 1.3em;
  color: ${colors.black};
  max-width: 400px;
  &.uppercase {
    text-transform: uppercase;
  }
  ${breakpoint.monitor} {
    font-size: 16px;
  }
  ${addColorClasses()}
`;
