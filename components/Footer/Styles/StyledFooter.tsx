"use client";

import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledFooter = styled.footer`
  padding: 0 ${spaces.l}px;
  display: grid;
  row-gap: ${spaces.xxxl}px;
`;

export const StyledFooterLogo = styled.svg`
  width: 100%;
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
`;

export const FooterOtherLinks = styled.div`
  display: flex;
  gap: ${spaces.m}px;
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
`;
