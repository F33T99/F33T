"use client";

import { useContext } from "react";
import { ScrollAnimationContext } from "../ScrollAnimation/ScrollAnimation";
import { StyledProductBanner } from "./Styles/StyledProductBanner";

interface ProductBannerProps {}

const ProductBanner = ({}: ProductBannerProps) => {
  const {
    animationElRef,
    scrollYProgress: { currentPos, totalDistance, progress },
  } = useContext(ScrollAnimationContext);
  return <StyledProductBanner>{progress}</StyledProductBanner>;
};

export default ProductBanner;
