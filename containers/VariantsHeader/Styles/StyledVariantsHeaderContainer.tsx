"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";

export const StyledVariantsHeaderContainer = styled.h2`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${spaces.m}px;
  ${breakpoint.tabletPortrait} {
    height: 60vh;
  }
`;

export const VariantsInner = styled.div``;

export const VariantsHeader = styled(motion.span)`
  display: block;
  font-size: 17vh;
  line-height: 1em;
  text-transform: uppercase;
  color: ${colors.white};
  &.right {
    text-align: right;
  }
  ${breakpoint.tabletPortrait} {
    font-size: 10vh;
  }
  ${breakpoint.monitor} {
    font-size: 24vh;
  }
`;
