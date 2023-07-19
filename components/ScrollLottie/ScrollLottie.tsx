import { DotLottiePlayer, DotLottieRefProps } from "@dotlottie/react-player";
import { useContext, useRef } from "react";
import { trimProgress } from "../../helpers/trimProgress";
import { useRaf } from "../../hooks/useRaf";
import { ScrollAnimationContext } from "../ScrollAnimation/ScrollAnimation";

interface ScrollLottieProps {
  src: string;
  playInInterval?: number[];
  onFrameChange?: (frameData: { frame: number; totalFrames: number }) => void;
}

const ScrollLottie = ({
  src,
  playInInterval = [0, 1],
  onFrameChange = () => {},
}: ScrollLottieProps) => {
  const { dryScrollYProgress } = useContext(ScrollAnimationContext);
  const lottieRef = useRef<DotLottieRefProps>();
  const containerRef = useRef<HTMLDivElement>(null);

  useRaf(containerRef, function raf() {
    const lottie = lottieRef.current?.getLottie();
    const timmedProgress = trimProgress(
      dryScrollYProgress.current.progress,
      playInInterval
    );
    const totalFrames = lottie.totalFrames;
    if (timmedProgress >= 0 && timmedProgress <= 1) {
      const frame = Math.floor(totalFrames * timmedProgress);
      lottie?.goToAndStop(frame, true);
      onFrameChange({ frame, totalFrames });
    }
  });

  return (
    <div ref={containerRef}>
      <DotLottiePlayer lottieRef={lottieRef} src={src} renderer='svg' />
    </div>
  );
};

export default ScrollLottie;
