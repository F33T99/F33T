"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  StyledVariantsHeaderContainer,
  VariantsHeader,
  VariantsInner,
} from "./Styles/StyledVariantsHeaderContainer";

const VariantsHeaderContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 end", "0.9 end"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["100", "0%"]);

  return (
    <StyledVariantsHeaderContainer ref={ref}>
      <VariantsInner>
        <VariantsHeader className="left" style={{ x: left }}>
          Varianty
        </VariantsHeader>
        <VariantsHeader className="right" style={{ x: right }}>
          Vložek
        </VariantsHeader>
      </VariantsInner>
    </StyledVariantsHeaderContainer>
  );
};

export default VariantsHeaderContainer;
