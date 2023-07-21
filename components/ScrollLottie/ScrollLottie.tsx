import { DotLottiePlayer, DotLottieRefProps } from "@dotlottie/react-player";
import { useContext, useEffect, useRef } from "react";
import { trimProgress } from "../../helpers/trimProgress";
import { useRaf } from "../../hooks/useRaf";
import { ScrollAnimationContext } from "../ScrollAnimation/ScrollAnimation";

interface ScrollLottieProps {
  src: string;
  playInInterval?: number[];
  setFrameBounds?: (totalFrames: number) => number[];
  onFrameChange?: (frameData: { frame: number; totalFrames: number }) => void;
}

const ScrollLottie = ({
  src,
  playInInterval = [0, 1],
  setFrameBounds = (totalFrames) => [0, totalFrames],
  onFrameChange = () => {},
}: ScrollLottieProps) => {
  const { dryScrollYProgress } = useContext(ScrollAnimationContext);
  const lottieRef = useRef<DotLottieRefProps>();
  const containerRef = useRef<HTMLDivElement>(null);
  const prevFrame = useRef(null);

  useRaf(containerRef, function raf() {
    const lottie = lottieRef.current?.getLottie();
    const timmedProgress = trimProgress(
      dryScrollYProgress.current.progress,
      playInInterval
    );
    const totalFrames = lottie?.totalFrames;
    const frameBounds = setFrameBounds(totalFrames);
    const frame = Math.floor(totalFrames * timmedProgress);

    // handle loading the first frame
    if (prevFrame.current === null && lottie) {
      lottie.goToAndStop(frameBounds[0], true);
      prevFrame.current = frameBounds[0];
    }

    if (
      lottie &&
      timmedProgress >= 0 &&
      timmedProgress <= 1 &&
      frame >= frameBounds[0] &&
      frame <= frameBounds[1] &&
      frame !== prevFrame.current
    ) {
      prevFrame.current = frame;
      lottie.goToAndStop(frame, true);
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
