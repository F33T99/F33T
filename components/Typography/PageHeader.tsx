"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const PageHeader = styled.h1`
  font-size: 40px;
  line-height: 1.2em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${colors.white};
  max-width: 600px;
  ${breakpoint.monitor} {
    font-size: 60px;
    max-width: 800px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 30px;
    margin-left: -0.4rem;
  }
  ${breakpoint.phone} {
    font-size: 21px;
    margin-left: -0.2rem;
  }
  ${addColorClasses()}
`;
