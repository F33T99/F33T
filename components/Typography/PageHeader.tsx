"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const PageHeader = styled.h1`
  font-size: 130px;
  line-height: 1em;
  letter-spacing: -0.07em;
  text-transform: uppercase;
  margin-left: -0.6rem;
  color: ${colors.black};
  ${breakpoint.smallNotebook} {
    font-size: 110px;
    margin-left: -0.4rem;
  }
  ${breakpoint.phone} {
    font-size: 45px;
    margin-left: -0.2rem;
  }
  ${addColorClasses()}
`;
