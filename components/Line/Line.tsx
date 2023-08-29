"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import { ColorKeys, colors } from "../../consts/colors";
import { StyledLine } from "./StyledLine";
import { useWindowSize } from "../../hooks/useWindowSize";
import { device } from "../../consts/breakpoints";

interface LineProps {
  stroke?: ColorKeys;
  diagonalSize?: number;
  flip?: boolean;
  vertical?: boolean;
  style?: CSSProperties;
  debug?: boolean;
  className?: string;
}

const Line = ({
  stroke = "white",
  diagonalSize = 25,
  flip,
  vertical,
  style,
  debug,
  className,
}: LineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const parentElWidth = useRef<number>(0);
  const parentElHeight = useRef<number>(0);
  const { w } = useWindowSize();

  useEffect(() => {
    function handleResize() {
      const _diagonalSize = w <= device.phone ? diagonalSize / 2 : diagonalSize;
      parentElWidth.current = containerRef.current.offsetWidth;
      parentElHeight.current = containerRef.current.offsetHeight;
      debug && console.log(containerRef.current.offsetWidth);

      svgRef.current.setAttribute("width", String(parentElWidth.current));
      if (vertical) {
        pathRef.current.setAttribute(
          "d",
          `M 0 0 L ${_diagonalSize} ${_diagonalSize} V ${parentElHeight.current}`
        );
        svgRef.current.setAttribute("width", `${_diagonalSize + 4}`);
        svgRef.current.setAttribute("height", `${parentElHeight.current}`);
        return;
      }
      pathRef.current.setAttribute(
        "d",
        `M 0 0 L ${_diagonalSize} ${_diagonalSize} H ${parentElWidth.current}`
      );
      svgRef.current.setAttribute("width", `${parentElWidth.current}`);
      svgRef.current.setAttribute("height", `${_diagonalSize + 4}`);
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
      className={`${flip ? "flip" : ""} ${className}`}>
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
