"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";
import { motion } from "framer-motion";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledCart = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  pointer-events: none;
  height: 100dvh;
`;

export const Drawer = styled(motion.div)`
  pointer-events: all;
  position: absolute;
  z-index: 2;
  padding: ${spaces.l}px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background-color: ${colors.gray300};
  display: flex;
  flex-direction: column;
  row-gap: ${spaces.xxl}px;
  ${breakpoint.monitor} {
    width: 800px;
  }
  ${breakpoint.smallNotebook} {
    width: 500px;
  }
  ${breakpoint.phone} {
    width: 100vw;
    height: 100dvh;
    bottom: unset;
    padding: ${spaces.m}px;
    row-gap: ${spaces.l}px;
  }
`;

export const Overlay = styled(motion.div)`
  pointer-events: all;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartCloseWrapper = styled.div`
  width: 70px;
  div {
    width: 100%;
    height: 100%;
  }
`;

export const CartItemWrapper = styled.div`
  display: grid;
  row-gap: ${spaces.m}px;
`;

export const CartItems = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
`;

export const CartContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const EmptyCart = styled.div``;

export const CartFooter = styled.div`
  height: 100px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${spaces.m}px;
`;
