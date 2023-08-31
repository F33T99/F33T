"use client";

import React from "react";
import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";
import { motion } from "framer-motion";
import { easing } from "../../consts/animationConfig";
import { breakpoint } from "../../consts/breakpoints";

interface BurgerProps {
  stroke?: ColorKeys;
  strokeWidth?: number;
  width?: number;
  height?: number;
  isOpen: boolean;
  onClick: () => void;
}

const StyledBurger = styled.div`
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const BurgerWrapper = styled.div`
  width: 100px;
  ${breakpoint.phone} {
    width: 70px;
  }
  ${breakpoint.smallPhone} {
    width: 50px;
  }
`;

const Burger = ({
  stroke = "black",
  strokeWidth = 8,
  width = 100,
  height = 18,
  isOpen,
  onClick,
}: BurgerProps) => {
  const svgWidth = width;
  const svgHeight = height + strokeWidth * 2;

  return (
    <BurgerWrapper>
      <StyledBurger onClick={onClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={svgWidth}
          height={svgHeight}
          fill='none'
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          <motion.path
            transition={{ ease: easing }}
            animate={{
              d: isOpen
                ? `M 0 ${strokeWidth / 2} L ${svgWidth} ${
                    svgHeight - strokeWidth / 2
                  }`
                : `M 0 ${strokeWidth / 2} L ${svgWidth} ${strokeWidth / 2}`,
            }}
            stroke={colors[stroke]}
            strokeWidth={strokeWidth}
          />
          <motion.path
            transition={{ ease: easing }}
            animate={{
              d: isOpen
                ? `M 0 ${svgHeight / 2} H ${0}`
                : `M 0 ${svgHeight / 2} H ${svgWidth}`,
            }}
            stroke={colors[stroke]}
            strokeWidth={strokeWidth}
          />
          <motion.path
            transition={{ ease: easing }}
            animate={{
              d: isOpen
                ? `M 0 ${svgHeight - strokeWidth / 2} L ${svgWidth} ${
                    strokeWidth / 2
                  }`
                : `M 0 ${svgHeight - strokeWidth / 2} L ${svgWidth} ${
                    svgHeight - strokeWidth / 2
                  }`,
            }}
            stroke={colors[stroke]}
            strokeWidth={strokeWidth}
          />
        </svg>
      </StyledBurger>
    </BurgerWrapper>
  );
};

export default Burger;
