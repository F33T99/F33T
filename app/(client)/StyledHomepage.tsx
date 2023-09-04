"use client";

import styled, { createGlobalStyle } from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
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
  ${breakpoint.monitor} {
    padding: 0 ${spaces.xl}px;
  }
  ${breakpoint.tabletLandscape} {
    margin: ${spaces.xxxl}px 0;
  }
  ${breakpoint.phone} {
    margin: ${spaces.xl}px 0;
    padding: 0 ${spaces.m}px;
  }
  ${breakpoint.smallPhone} {
    padding: 0 ${spaces.s}px;
  }
`;

export const TechnologyHeader = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  font-size: 12vw;
  margin-bottom: ${spaces.xxxxl}px;
  ${breakpoint.tabletLandscape} {
    margin-bottom: ${spaces.xxxl}px 0;
  }
  ${breakpoint.tabletPortrait} {
    text-align: left;
  }
  ${breakpoint.phone} {
    margin-bottom: ${spaces.xxl}px;
  }
`;

export const TechnologyContent = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr 400px;
  grid-template-areas: "_1 loop _2";
  column-gap: ${spaces.xl}px;
  width: 100%;
  align-items: start;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 300px 1fr 300px;
  }
  ${breakpoint.tabletLandscape} {
    grid-template-columns: 200px 1fr 200px;
    column-gap: ${spaces.l}px;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "loop loop" "_1 _2";
    row-gap: ${spaces.xl}px;
    column-gap: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-template-areas: "loop" "_1" "_2";
    row-gap: ${spaces.xl}px;
  }
  ${breakpoint.monitor} {
    grid-template-columns: 500px 1fr 500px;
  }
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
  ${breakpoint.phone} {
    width: 90%;
  }
`;

export const TechnologyBenefits = styled.div`
  display: grid;
  row-gap: ${spaces.xl}px;
  &._1 {
    align-self: end;
    grid-area: _1;
  }
  &.2 {
    grid-area: 2;
  }
  ${breakpoint.tabletLandscape} {
    row-gap: ${spaces.l}px;
  }
`;

export const TechnologyLoopWrapper = styled.div`
  grid-area: loop;
`;

export const ReferencesSection = styled.section`
  background-color: ${colors.gray300};
  padding: ${spaces.xxxxl}px ${spaces.l}px;
  ${breakpoint.smallNotebook} {
    padding: ${spaces.xxxl}px ${spaces.l}px ${spaces.xxl}px;
  }
  ${breakpoint.tabletLandscape} {
    padding: ${spaces.xxxl}px ${spaces.l}px;
  }
  ${breakpoint.phone} {
    padding: ${spaces.xl}px ${spaces.m}px;
  }
  ${breakpoint.monitor} {
    padding: ${spaces.xxxxl}px ${spaces.xl}px;
  }
`;

export const References = styled.div`
  margin-top: ${spaces.xxxxl}px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "wide wide wide" "line1 line1 line1" "short line2 short2";
  row-gap: ${spaces.xxxl}px;
  column-gap: ${spaces.xxl}px;
  align-items: start;
  .line {
    &._1 {
      grid-area: line1;
    }
    &._2 {
      grid-area: line2;
    }
  }
  .vertical.line._2 {
    display: block;
  }
  .horizontal.line._2 {
    display: none;
  }
  ${breakpoint.smallNotebook} {
    margin-top: ${spaces.xxxl}px;
    row-gap: ${spaces.xl}px;
    column-gap: ${spaces.l}px;
  }
  ${breakpoint.tabletLandscape} {
    row-gap: ${spaces.xxl}px;
    margin-top: ${spaces.xxl}px;
    column-gap: ${spaces.l}px;
  }
  ${breakpoint.tabletPortrait} {
    align-items: initial;
    grid-template-columns: 1fr 26px 1fr;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-template-areas: "wide" "line1" "short" "line2" "short2";
    row-gap: ${spaces.l}px;
    margin-top: ${spaces.xl}px;
    .vertical.line._2 {
      display: none;
    }
    .horizontal.line._2 {
      display: block;
    }
  }
`;

export const Reference = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
  &.wide {
    grid-area: wide;
  }
  &.short._1 {
    grid-area: short;
  }
  &.short._2 {
    grid-area: short2;
  }
  ${breakpoint.phone} {
    row-gap: ${spaces.xs}px;
  }
`;

export const ReferencePerson = styled.div``;
