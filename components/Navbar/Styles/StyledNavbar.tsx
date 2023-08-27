import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import { colors } from "../../../consts/colors";
import { breakpoint } from "../../../consts/breakpoints";
import { motion } from "framer-motion";

export const StyledNavbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: ${spaces.l}px;
  display: flex;
  justify-content: space-between;
  column-gap: ${spaces.m}px;
  &.with-bg {
    background-color: ${({ theme }) =>
      theme.type === "light" ? colors.gray300 : colors.black};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${spaces.xl}px;
  align-items: center;
`;

export const CartBadge = styled.div`
  background-color: ${colors.red400};
  padding: ${spaces.xs}px;
  border-radius: 99999px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.red300};
  }
  ${breakpoint.monitor} {
    padding: ${spaces.m}px;
  }
`;
