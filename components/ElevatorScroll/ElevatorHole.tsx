"use client";

import React, { ReactNode, createContext, useContext, useRef } from "react";
import { StyledElevatorHole } from "./Styles/StyledElevatorHole";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface ElevatorHoleProps {
  children: ReactNode;
}

export const ElevatorContext = createContext<{
  containerRef: React.MutableRefObject<HTMLDivElement>;
  y?: MotionValue<string>;
}>(null);

const ElevatorHole = ({ children }: ElevatorHoleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useRef<boolean>(false);
  useIntersectionObserver(
    containerRef,
    (entries) => {
      entries.forEach((entry) => {
        isIntersecting.current = entry.isIntersecting;
      });
    },
    {
      threshold: [0, 1],
    }
  );

  return (
    <ElevatorContext.Provider value={{ containerRef }}>
      <StyledElevatorHole ref={containerRef}>{children}</StyledElevatorHole>
    </ElevatorContext.Provider>
  );
};

export default ElevatorHole;
