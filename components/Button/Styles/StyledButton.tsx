"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledButton = styled.button`
  all: unset;
  display: inline-block;
  background-color: ${colors.red400};
  color: ${colors.black};
  padding: 3px 5px 0px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 0.03em;
  cursor: pointer;
  &[type="submit"] {
    height: 42px;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
  }
  &:hover {
    background-color: ${colors.red300};
  }
  &.full-width {
    display: block;
    text-align: center;
  }
  &.big {
    font-size: 40px;
  }
  &.x-big {
    font-size: 50px;
  }
  ${breakpoint.monitor} {
    font-size: 50px;
    &.big {
      font-size: 60px;
    }
    &.x-big {
      font-size: 70px;
    }
  }
  ${breakpoint.tabletLandscape} {
    &.x-big {
      font-size: 40px;
    }
  }
  ${breakpoint.phone} {
    font-size: 24px;
    &.big {
      font-size: 30px;
    }
    &.x-big {
      font-size: 30px;
    }
  }
`;

export const ButtonWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces.s}px;
`;
