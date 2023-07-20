"use client";

import styled, { css } from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const SectionHeader = styled.h2`
  font-size: 90px;
  letter-spacing: -0.03em;
  line-height: 1em;
  text-transform: uppercase;
  color: ${colors.white};
  margin-left: -0.3rem;
  &.max-width {
    max-width: 1200px;
  }
  ${breakpoint.monitor} {
    font-size: 100px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 70px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 70px;
  }
  ${breakpoint.phone} {
    font-size: 40px;
    margin-left: 0;
  }
  ${breakpoint.smallPhone} {
    font-size: 30px;
  }
  ${addColorClasses(
    (color, colorKey) => `
      &.outline-${colorKey} {
        text-shadow: -1px -1px 0 ${color}, 
                     1px -1px 0 ${color},
                     -1px 1px 0 ${color}, 
                     1px 1px 0 ${color};
        color: black;
      }
    `,
    true
  )}
`;
