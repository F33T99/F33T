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
  ${breakpoint.phone} {
    padding: ${spaces.m}px;
    padding-top: 0px;
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.s}px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  ${breakpoint.phone} {
    display: grid;
    row-gap: ${spaces.l}px;
  }
  ${breakpoint.smallPhone} {
    row-gap: ${spaces.m}px;
  }
`;

export const FooterNavLinks = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
  ${breakpoint.phone} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: ${spaces.xxs}px;
  }
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  ${breakpoint.phone} {
    display: grid;
    row-gap: ${spaces.xxs}px;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  gap: ${spaces.m}px;
  ${breakpoint.phone} {
    display: grid;
    row-gap: ${spaces.xxs}px;
  }
`;

export const FooterInstagram = styled.div``;

export const FooterEshopLinks = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
  ${breakpoint.phone} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${spaces.xl}px;
    row-gap: ${spaces.xxs}px;
  }
`;

export const FooterEnd = styled.div`
  display: flex;
  justify-content: space-between;
  ${breakpoint.tabletLandscape} {
    align-items: flex-end;
  }
  ${breakpoint.phone} {
    display: grid;
    row-gap: ${spaces.xl}px;
  }
`;

export const FooterAddress = styled.div`
  display: flex;
  gap: ${spaces.m}px;
  ${breakpoint.tabletLandscape} {
    flex-direction: column;
    row-gap: ${0}px;
    margin-top: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    margin-top: unset;
  }
`;

export const FooterOtherLinks = styled.div`
  display: flex;
  gap: ${spaces.m}px;
  ${breakpoint.tabletLandscape} {
    flex-direction: column;
    row-gap: ${0}px;
  }
  ${breakpoint.phone} {
    row-gap: ${spaces.xxs}px;
  }
`;
