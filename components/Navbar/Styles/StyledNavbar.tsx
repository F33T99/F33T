import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledNavbar = styled.nav`
  padding: ${spaces.l}px 0;
  display: flex;
  justify-content: space-between;
  column-gap: ${spaces.m}px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${spaces.xl}px;
`;
