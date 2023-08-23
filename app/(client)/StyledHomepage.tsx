"use client";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const GlobalHomepage = createGlobalStyle`
  body {
    background-color: ${colors.black};
  }
`;

export const StyledHomepage = styled.main``;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
`;

export const Technology = styled.section`
  padding: 0 ${spaces.l}px;
  margin: ${spaces.xxxxl}px 0;
`;

export const TechnologyHeader = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  font-size: 12vw;
  margin-bottom: ${spaces.xxxxl}px;
`;

export const TechnologyContent = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr 400px;
  column-gap: ${spaces.xl}px;
  width: 100%;
  align-items: start;
`;

export const TechnologyLoop = styled.div`
  position: relative;
`;

export const TechnologyPlayButton = styled.div`
  position: absolute;
  width: 200px;
  top: 0;
  left: 0;
`;

export const TechnologyBenefit = styled.div`
  display: grid;
  row-gap: ${spaces.m}px;
`;

export const TechnologyBenefits = styled.div`
  display: grid;
  row-gap: ${spaces.xl}px;
  &._1 {
    align-self: end;
  }
`;

export const ReferencesSection = styled.section`
  background-color: ${colors.gray300};
  padding: ${spaces.xxxxl}px ${spaces.l}px;
`;

export const References = styled.div`
  margin-top: ${spaces.xxxxl}px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "wide wide wide" "short line short2";
  row-gap: ${spaces.l}px;
  column-gap: ${spaces.xxl}px;
  align-items: center;
`;

export const Reference = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  &.wide {
    grid-area: wide;
  }
  &.short_1 {
    grid-area: short;
  }
  &.short_2 {
    grid-area: short2;
  }
`;

export const ReferencePerson = styled.div``;

export const ReferenceHorLine = styled.svg`
  width: 100%;
  height: auto;
`;

export const ReferenceVerLine = styled.svg`
  height: 100%;
  width: auto;
  grid-area: line;
`;
