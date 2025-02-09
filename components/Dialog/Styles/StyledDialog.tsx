"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";
import { colors } from "../../../consts/colors";

export const StyledDialog = styled(RadixDialog.Root)``;

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -45%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const Content = styled(RadixDialog.Content)`
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${colors.black};
  z-index: 99;
  animation: ${contentShow} 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const Close = styled(RadixDialog.Close)`
  width: 80px;
  height: 80px;
  background-color: ${colors.black};
  border-radius: 0;
  position: absolute;
  right: 0;
  top: -80px;
  border: 0;
  cursor: pointer;
  padding: 5px;
  img {
    width: 100%;
    height: 100%;
  }
  ${breakpoint.largeNotebook} {
    height: 70px;
    width: 70px;
    top: -70px;
  }
  ${breakpoint.smallNotebook} {
    height: 60px;
    width: 60px;
    top: -60px;
  }
  ${breakpoint.tabletLandscape} {
    height: 50px;
    width: 50px;
    top: -50px;
  }
  ${breakpoint.phone} {
    height: 40px;
    width: 40px;
    top: -40px;
  }
`;

export const Trigger = styled(RadixDialog.Trigger)`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 0;
  cursor: pointer;
`;

export const Overlay = styled(RadixDialog.Overlay)`
  background-color: ${colors.black};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  /* z-index: 99999999998; */
  cursor: pointer;
  animation: ${overlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;
