"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";

export const StyledLink = styled.a`
  &,
  a,
  a:link,
  a:visited {
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
    &[target] {
      display: flex;
      align-items: center;
      gap: 0.4em;
      svg {
        height: 0.8em;
        flex-shrink: 0;
      }
    }
    &.in-badge {
      border: 1px solid ${colors.black};
      padding: ${spaces.xxs}px ${spaces.s}px;
      border-radius: 99999px;
      &:hover {
        background-color: ${colors.yellow400};
        color: ${colors.white};
        &[target] {
          svg {
            fill: ${colors.black};
          }
        }
      }
    }
    &.uppercase {
      text-transform: uppercase;
    }
    &.no-underline {
      text-decoration: none;
    }
    &:visited {
      color: inherit;
    }
    &:hover {
      color: ${colors.red400};
      &[target] {
        svg {
          fill: ${colors.red400};
        }
      }
    }
    &.light {
      &:hover {
        color: ${colors.yellow400};
        &[target] {
          svg {
            fill: ${colors.yellow400};
          }
        }
      }
    }
  }
`;
