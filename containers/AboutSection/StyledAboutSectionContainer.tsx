"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import Image from "next/image";
import { colors } from "../../consts/colors";
import { breakpoint } from "../../consts/breakpoints";

export const StyledAboutSection = styled.div`
  padding: ${spaces.xxxxl}px ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    padding: ${spaces.xxxl}px ${spaces.l}px;
  }
`;

export const AboutGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spaces.s}px;
  align-items: start;
  position: relative;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    margin-top: ${spaces.xxxl}px;
  }
`;

export const AboutPhoto = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
  &._1 {
    margin-top: ${spaces.xxxxl}px;
  }
  ${breakpoint.tabletPortrait} {
    &._1 {
      margin-top: ${0}px;
    }
  }
`;

const StyledPlanet = styled.svg`
  margin-top: ${spaces.xl}px;
  margin-left: 10%;
  ${breakpoint.smallNotebook} {
    width: 200px;
  }
`;

export const Planet = () => (
  <StyledPlanet
    xmlns='http://www.w3.org/2000/svg'
    width='295.463'
    height='295.463'
    vectorEffect='non-scaling-stroke'
    viewBox='0 0 295.463 295.463'>
    <g transform='translate(-2000.137 -7894.814)'>
      <circle
        cx='145.732'
        cy='145.732'
        r='145.732'
        transform='translate(2002.137 7896.814)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <ellipse
        cx='112.915'
        cy='145.732'
        rx='112.915'
        ry='145.732'
        transform='translate(2034.954 7896.814)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <ellipse
        cx='80.099'
        cy='145.732'
        rx='80.099'
        ry='145.732'
        transform='translate(2067.77 7896.814)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <ellipse
        cx='47.286'
        cy='145.732'
        rx='47.286'
        ry='145.732'
        transform='translate(2100.583 7896.814)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <ellipse
        cx='14.469'
        cy='145.732'
        rx='14.469'
        ry='145.732'
        transform='translate(2133.399 7896.814)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
    </g>
  </StyledPlanet>
);

const StyledSmiley = styled(motion.svg)`
  ${breakpoint.smallNotebook} {
    width: 200px;
  }
`;

export const Smiley = () => (
  <StyledSmiley
    xmlns='http://www.w3.org/2000/svg'
    width='295.464'
    height='295.463'
    vectorEffect='non-scaling-stroke'
    viewBox='0 0 295.464 295.463'
    animate={{
      rotate: -360,
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    }}>
    <g transform='translate(-2342.815 -7894.814)'>
      <path
        d='M391.457,146.232A145.731,145.731,0,1,1,245.725.5,145.733,145.733,0,0,1,391.457,146.232'
        transform='translate(2244.821 7896.314)'
        stroke='#707070'
        strokeWidth='4'
      />
      <circle
        cx='145.732'
        cy='145.732'
        r='145.732'
        transform='translate(2344.816 7896.814)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <path
        d='M117.037,57.277a100.27,100.27,0,0,0,174.067,0'
        transform='translate(2286.478 8035.089)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <ellipse
        cx='21.733'
        cy='45.474'
        rx='21.733'
        ry='45.474'
        transform='translate(2422.564 7969.792)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <ellipse
        cx='21.733'
        cy='45.474'
        rx='21.733'
        ry='45.474'
        transform='translate(2515.065 7969.792)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit='10'
        strokeWidth='4'
      />
      <path
        d='M160.33,58.471c0,13.667-8.239,24.747-18.4,24.747s-18.4-11.08-18.4-24.747,8.235-24.747,18.4-24.747,18.4,11.08,18.4,24.747'
        transform='translate(2302.363 7977.521)'
        fill='#fff'
      />
      <path
        d='M187.188,58.471c0,13.667-8.239,24.747-18.4,24.747s-18.4-11.08-18.4-24.747,8.235-24.747,18.4-24.747,18.4,11.08,18.4,24.747'
        transform='translate(2368.007 7977.521)'
        fill='#fff'
      />
    </g>
  </StyledSmiley>
);

const StyledFlexIcon = styled.svg`
  position: absolute;
  z-index: 5;
  top: 20%;
  left: 10%;
`;

export const FlexIcon = () => {
  return (
    <StyledFlexIcon
      xmlns='http://www.w3.org/2000/svg'
      width='40.837'
      height='40.837'
      data-inertia
      data-inertia-amount={30}
      viewBox='0 0 40.837 40.837'
      fill={colors.white}>
      <g transform='translate(-86.163 -7981)'>
        <path
          d='M20.419,29.342a8.923,8.923,0,1,1,8.923-8.923,8.933,8.933,0,0,1-8.923,8.923m0-16.945a8.022,8.022,0,1,0,8.022,8.022A8.032,8.032,0,0,0,20.419,12.4'
          transform='translate(86.163 7981)'
        />
        <path
          d='M20.419,36.334A15.915,15.915,0,1,1,36.335,20.419,15.933,15.933,0,0,1,20.419,36.334m0-30.93A15.014,15.014,0,1,0,35.434,20.419,15.032,15.032,0,0,0,20.419,5.4'
          transform='translate(86.163 7981)'
        />
        <path
          d='M20.419,20.419V11.946a8.474,8.474,0,0,1,8.473,8.473Z'
          transform='translate(86.163 7981)'
        />
        <path
          d='M20.419,20.419H11.946a8.474,8.474,0,0,0,8.473,8.473Z'
          transform='translate(86.163 7981)'
        />
        <rect
          width='40.837'
          height='0.901'
          transform='translate(86.163 8000.968)'
        />
        <rect
          width='0.901'
          height='40.837'
          transform='translate(106.131 7981)'
        />
      </g>
    </StyledFlexIcon>
  );
};
const StyledFlexIcon2 = styled.svg`
  position: absolute;
  top: 50%;
  z-index: 5;
  left: 50%;
`;

export const FlexIcon2 = () => {
  return (
    <StyledFlexIcon2
      xmlns='http://www.w3.org/2000/svg'
      width='39.754'
      data-inertia
      data-inertia-amount={30}
      height='39.755'
      viewBox='0 0 39.754 39.755'>
      <g transform='translate(-1906 -8556)'>
        <rect
          width='31.389'
          height='31.389'
          transform='translate(1910.183 8560.184)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
        <line
          y2='9.999'
          transform='translate(1925.877 8570.878)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
        <line
          x2='9.999'
          transform='translate(1920.877 8575.877)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
        <line
          x2='8.365'
          transform='translate(1937.389 8575.877)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
        <line
          x2='8.365'
          transform='translate(1906 8575.877)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
        <line
          y2='8.365'
          transform='translate(1925.877 8587.39)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
        <line
          y2='8.365'
          transform='translate(1925.877 8556)'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='0.5'
        />
      </g>
    </StyledFlexIcon2>
  );
};
