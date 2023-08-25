"use client";

import React, { useEffect, useRef } from "react";
import { ColorKeys, colors } from "../../consts/colors";
import { StyledLine } from "./StyledLine";

interface LineProps {
  stroke?: ColorKeys;
  diagonalSize?: number;
  flip?: boolean;
}

const Line = ({ stroke = "white", diagonalSize = 25, flip }: LineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function handleResize() {
      const parentElWidth = containerRef.current.offsetWidth;

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
    <StyledLine ref={containerRef} className={flip ? "flip" : ""}>
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
