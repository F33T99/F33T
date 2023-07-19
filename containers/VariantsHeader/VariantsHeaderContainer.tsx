"use client";
import { cubicBezier } from "framer-motion";
import { useContext } from "react";
import { ScrollAnimationContext } from "../../components/ScrollAnimation/ScrollAnimation";
import {
  StyledVariantsHeaderContainer,
  VariantsHeader,
  VariantsInner,
} from "./Styles/StyledVariantsHeaderContainer";

const VariantsHeaderContainer = () => {
  const { animationElRef, scrollYProgress } = useContext(
    ScrollAnimationContext
  );
  const easing = cubicBezier(0.5, 0, 0, 0.5);
  const easedProgress = easing(scrollYProgress.progress);

  return (
    <StyledVariantsHeaderContainer ref={animationElRef}>
      <VariantsInner>
        <VariantsHeader
          className='left'
          style={{
            transform: `translateX(${100 + easedProgress * -100}%)`,
          }}>
          Varianty
        </VariantsHeader>
        <VariantsHeader
          className='right'
          style={{
            transform: `translateX(${-100 + easedProgress * 100}%)`,
          }}>
          Vložek
        </VariantsHeader>
      </VariantsInner>
    </StyledVariantsHeaderContainer>
  );
};

export default VariantsHeaderContainer;
