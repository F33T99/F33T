"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";
import { PostPostContainer } from "../../pageStyles/postPageStyles";

export const Large = styled.p`
  font-size: 50px;
  letter-spacing: -0.01em;
  line-height: 1.3em;
  color: ${colors.black};
  max-width: 800px;
  &.max-width {
    max-width: unset;
  }
  ${breakpoint.monitor} {
    font-size: 60px;
    max-width: 1000px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 40px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 30px;
    max-width: 500px;
  }
  ${breakpoint.smallPhone} {
    font-size: 21px;
  }
  ${PostPostContainer} & {
    ${breakpoint.smallNotebook} {
      font-size: 35px;
    }
    ${breakpoint.phone} {
      font-size: 21px;
    }
    ${breakpoint.smallPhone} {
      font-size: 16px;
    }
  }
  ${addColorClasses()}
`;
