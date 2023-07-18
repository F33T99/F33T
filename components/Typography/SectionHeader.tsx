"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";
import { PostPostContainer } from "../../pageStyles/postPageStyles";

export const SectionHeader = styled.h2`
  font-size: 90px;
  letter-spacing: -0.03em;
  /* Section header should not be on two rows */
  line-height: 1.2em;
  text-transform: uppercase;
  color: ${colors.black};
  margin-left: -0.3rem;
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
  ${PostPostContainer} & {
    ${breakpoint.smallNotebook} {
      font-size: 60px;
    }
    ${breakpoint.tabletPortrait} {
      font-size: 45px;
    }
    ${breakpoint.phone} {
      font-size: 26px;
    }
    ${breakpoint.smallPhone} {
      font-size: 21px;
    }
  }
  ${addColorClasses()}
`;
