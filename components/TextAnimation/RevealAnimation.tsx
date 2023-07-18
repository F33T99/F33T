"use client";

import { ReactNode } from "react";
import { easing } from "../../consts/animationConfig";
import {
  StyledRevealAnimation,
  RevealAnimationInner,
} from "./Styles/StyledRevealAnimation";

interface TextAnimationProps {
  children: ReactNode;
  delay?: number;
  noSkew?: boolean;
  noCrop?: boolean;
  duration?: number;
  disable?: boolean;
  y?: (number | string)[];
}

const RevealAnimation = ({
  children,
  delay = 0,
  noSkew = false,
  duration = 0.5,
  noCrop = false,
  disable,
  y,
}: TextAnimationProps) => {
  return disable ? (
    <div>{children}</div>
  ) : (
    <StyledRevealAnimation style={{ overflow: noCrop ? "unset" : "hidden" }}>
      <RevealAnimationInner
        initial={{ y: y ? y[0] : "95%", skew: noSkew ? 0 : 40, opacity: 0 }}
        whileInView={{ y: y ? y[1] : "0%", skew: 0, opacity: 1 }}
        transition={{ delay: 0.5 * delay, ease: easing, duration: duration }}
        viewport={{
          once: true,
          margin: "10% 0%",
        }}
      >
        {children}
      </RevealAnimationInner>
    </StyledRevealAnimation>
  );
};

export default RevealAnimation;
