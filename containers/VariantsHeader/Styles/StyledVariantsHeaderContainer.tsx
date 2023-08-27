"use client";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledVariantsHeaderContainer = styled.h2`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const VariantsInner = styled.div``;

export const VariantsHeader = styled.span`
  display: block;
  font-size: 17vh;
  line-height: 1em;
  text-transform: uppercase;
  &.right {
    text-align: right;
  }
  ${breakpoint.monitor} {
    font-size: 24vh;
  }
`;
