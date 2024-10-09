"use client";

import { ResolvedValues } from "framer-motion";
import { easing } from "../../consts/animationConfig";
import { ColorKeys } from "../../consts/colors";
import * as S from "./StyledDivider";

interface DividerProps {
  fill?: ColorKeys;
  animate?: boolean | "inView" | "animatePresence";
  duration?: number;
  once?: boolean;
  onAnimationEnded?: (arg: ResolvedValues) => void;
  reverse?: boolean;
}

const Divider = ({
  fill = "gray300",
  animate = "inView",
  duration = 3,
  once = true,
  reverse,
  onAnimationEnded = () => {},
}: DividerProps) => {
  return (
    <S.StyledDivider>
      <S.DividerLine
        // className={reverse ? "reverse" : ""}
        color={fill}
        initial={"hidden"}
        whileInView={animate === "inView" ? "visible" : undefined}
        viewport={{ once }}
        animate={animate !== "inView" && animate ? "visible" : "hidden"}
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ ease: easing, duration: duration }}
        onUpdate={(arg) => {
          onAnimationEnded(arg);
        }}
      />
    </S.StyledDivider>
  );
};

export default Divider;
