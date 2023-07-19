"use client";

import ScrollLottie from "../ScrollLottie/ScrollLottie";
import {
  LottieWrapper,
  StyledProductBanner,
} from "./Styles/StyledProductBanner";

interface ProductBannerProps {}

const ProductBanner = ({}: ProductBannerProps) => {
  return (
    <StyledProductBanner>
      <LottieWrapper>
        <ScrollLottie
          src={"/lottie/insole-scroll.lottie"}
          playInInterval={[0.47, 0.53]}
        />
      </LottieWrapper>
    </StyledProductBanner>
  );
};

export default ProductBanner;
