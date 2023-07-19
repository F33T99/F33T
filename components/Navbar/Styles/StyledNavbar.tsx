import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: ${spaces.l}px;
  display: flex;
  justify-content: space-between;
  column-gap: ${spaces.m}px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${spaces.xl}px;
`;
