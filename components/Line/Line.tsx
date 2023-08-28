"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import { ColorKeys, colors } from "../../consts/colors";
import { StyledLine } from "./StyledLine";

interface LineProps {
  stroke?: ColorKeys;
  diagonalSize?: number;
  flip?: boolean;
  vertical?: boolean;
  style?: CSSProperties;
}

const Line = ({
  stroke = "white",
  diagonalSize = 25,
  flip,
  vertical,
  style,
}: LineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const parentElWidth = useRef<number>(0);
  const parentElHeight = useRef<number>(0);

  useEffect(() => {
    function handleResize() {
      parentElWidth.current = containerRef.current.offsetWidth;
      parentElHeight.current = containerRef.current.offsetHeight;

      svgRef.current.setAttribute("width", String(parentElWidth.current));
      if (vertical) {
        pathRef.current.setAttribute(
          "d",
          `M 0 0 L ${diagonalSize} ${diagonalSize} V ${parentElHeight.current}`
        );
        svgRef.current.setAttribute("width", `${diagonalSize + 4}`);
        svgRef.current.setAttribute("height", `${parentElHeight.current}`);
        return;
      }
      pathRef.current.setAttribute(
        "d",
        `M 0 0 L ${diagonalSize} ${diagonalSize} H ${parentElWidth.current}`
      );
      svgRef.current.setAttribute("width", `${parentElWidth.current}`);
      svgRef.current.setAttribute("height", `${diagonalSize + 4}`);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledLine
      ref={containerRef}
      style={style}
      className={`${flip ? "flip" : ""}`}>
      <svg
        ref={svgRef}
        xmlns='http://www.w3.org/2000/svg'
        vectorEffect='non-scaling-stroke'
        stroke={colors[stroke]}
        fill={"none"}>
        <path ref={pathRef} strokeWidth='1px' />
      </svg>
    </StyledLine>
  );
};

export default Line;
