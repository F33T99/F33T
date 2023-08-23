"use client";

import React, { useEffect, useRef } from "react";
import { ColorKeys, colors } from "../../consts/colors";
import { StyledLine } from "./StyledLine";

interface LineProps {
  stroke?: ColorKeys;
}

const Line = ({ stroke = "white" }: LineProps) => {
  const diagonalSize = 25;
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function handleResize() {
      const parentElWidth = containerRef.current.parentElement.clientWidth;

      svgRef.current.setAttribute("width", String(parentElWidth));
      pathRef.current.setAttribute(
        "d",
        `M 0 0 L ${diagonalSize} ${diagonalSize} H ${parentElWidth}`
      );
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledLine ref={containerRef}>
      <svg
        ref={svgRef}
        xmlns='http://www.w3.org/2000/svg'
        height={diagonalSize + 4}
        vectorEffect='non-scaling-stroke'
        stroke={colors[stroke]}
        fill={"none"}>
        <path ref={pathRef} strokeWidth='1px' />
      </svg>
    </StyledLine>
  );
};

export default Line;
