"use client";

import React from "react";
import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";

interface CloseProps {
  stroke?: ColorKeys;
  strokeWidth?: number;
}

const StyledClose = styled.div``;

const Close = ({ stroke = "white", strokeWidth = 2 }: CloseProps) => {
  return (
    <StyledClose>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 45 45'
        width='45'
        height='45'>
        <line
          fill='none'
          stroke={colors[stroke]}
          stroke-width={strokeWidth}
          x1='6.5901'
          y1='6.5901'
          x2='38.4099'
          y2='38.4099'></line>
        <line
          fill='none'
          stroke={colors[stroke]}
          stroke-width={strokeWidth}
          x1='38.4099'
          y1='6.5901'
          x2='6.5901'
          y2='38.4099'></line>
      </svg>
    </StyledClose>
  );
};

export default Close;
