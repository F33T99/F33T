"use client";

import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import { colors } from "../../../consts/colors";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) =>
    theme.type === "dark" ? colors.black : colors.gray300};
  padding: ${spaces.l}px;
  padding-top: ${spaces.xxxxl}px;
  display: grid;
  row-gap: ${spaces.xxxl}px;
  ${breakpoint.tabletLandscape} {
    row-gap: ${spaces.xl}px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterEnd = styled.div`
  display: flex;
  justify-content: space-between;
  ${breakpoint.tabletLandscape} {
    align-items: flex-end;
  }
`;

export const FooterOtherLinks = styled.div`
  display: flex;
  gap: ${spaces.m}px;
  ${breakpoint.tabletLandscape} {
    flex-direction: column;
    row-gap: ${0}px;
  }
`;

export const FooterNavLinks = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const FooterInstagram = styled.div``;

export const FooterEshopLinks = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const FooterContacts = styled.div`
  display: flex;
  gap: ${spaces.m}px;
`;

export const FooterAddress = styled.div`
  display: flex;
  gap: ${spaces.m}px;
  ${breakpoint.tabletLandscape} {
    flex-direction: column;
    row-gap: ${0}px;
  }
`;
