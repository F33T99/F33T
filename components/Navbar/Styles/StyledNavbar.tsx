import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";

export const StyledNavbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: ${spaces.l}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${spaces.m}px;
  &.with-bg {
    background-color: ${({ theme }) =>
      theme.type === "light" ? colors.gray300 : colors.black};
  }
  ${breakpoint.monitor} {
    padding: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    padding: ${spaces.m}px;
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.s}px;
  }
`;

export const NavLinks = styled(motion.div)`
  display: flex;
  gap: ${spaces.xl}px;
  align-items: center;
  ${breakpoint.smallNotebook} {
    gap: ${spaces.l}px;
  }
  ${breakpoint.tabletPortrait} {
    position: fixed;
    inset: 0;
    height: 100dvh;
    background-color: ${colors.red400};
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: ${spaces.l}px;
  }
`;

export const CartBadge = styled.div`
  padding: ${spaces.xs}px;
  border-radius: 99999px;
  cursor: pointer;
  &.dark,
  &.light {
    background-color: ${colors.red400};
    &:hover {
      background-color: ${colors.red300};
    }
  }
  ${breakpoint.monitor} {
    padding: ${spaces.s}px;
  }
  ${breakpoint.tabletPortrait} {
    &.light {
      background-color: ${colors.black};
      &:hover {
        background-color: ${colors.gray700};
      }
    }
    background-color: ${colors.black};
    padding: ${spaces.xs}px;
  }
`;

export const CartLines = styled.span`
  font-size: 15px;
`;

export const PhoneNav = styled.div`
  display: none;
  ${breakpoint.tabletPortrait} {
    display: flex;
    align-items: center;
    column-gap: ${spaces.xs}px;
    position: relative;
    z-index: 1;
  }
`;

export const navlinkVariants = {
  expanded: {
    x: "0%",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
      duration: 0.4,
    },
  },
  collapsed: {
    x: "100%",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.07,
      duration: 0.4,
    },
  },
};

export const NavLinkWrapper = ({ children }) => (
  <div style={{ overflow: "hidden" }}>
    <motion.div
      variants={{
        expanded: { y: `0%`, skewY: "0deg" },
        collapsed: { y: `105%`, skewY: "4deg" },
      }}
      transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  </div>
);

export const NavContact = styled.div`
  display: none;
  ${breakpoint.tabletPortrait} {
    display: block;
    position: absolute;
    left: ${spaces.l}px;
    bottom: ${spaces.l}px;
    z-index: 1;
  }
`;
