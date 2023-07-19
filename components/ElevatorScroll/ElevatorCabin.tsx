"use client";

import React, { useContext, useRef } from "react";
import { StyledElevatorCabin } from "./Styles/StyledElevatorCabin";
import { useScroll, useTransform } from "framer-motion";
import { ElevatorContext } from "./ElevatorHole";

interface ElevatorCabinProps {}

const ElevatorCabin = ({}: ElevatorCabinProps) => {
  const cabinRef = useRef<HTMLDivElement>(null);
  const { containerRef } = useContext(ElevatorContext);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    // container: containerRef,
    target: containerRef,
  });
  const y = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <StyledElevatorCabin
      ref={cabinRef}
      style={{ top: y }}></StyledElevatorCabin>
  );
};

export default ElevatorCabin;
