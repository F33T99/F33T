import { DotLottie } from "@lottiefiles/dotlottie-web";
import { RefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import { trimProgress } from "../../helpers/trimProgress";
import { useRaf } from "../../hooks/useRaf";

interface ScrollLottieProps {
  src: string;
  playInInterval?: number[];
  setFrameBounds?: (totalFrames: number) => number[];
  onFrameChange?: (frameData: { frame: number; totalFrames: number }) => void;
  progress: RefObject<number>;
}

const StyledScrollLottie = styled.div`
  height: 100%;
  width: 100%;
  canvas {
    height: 100%;
    width: 100%;
  }
`;

const ScrollLottie = ({
  src,
  playInInterval = [0, 1],
  setFrameBounds = (totalFrames) => [0, totalFrames],
  onFrameChange = () => {},
  progress,
}: ScrollLottieProps) => {
  const animation = useRef<DotLottie>();
  const containerRef = useRef<HTMLDivElement>(null);
  const prevFrame = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    animation.current = new DotLottie({
      autoplay: false,
      loop: false,
      src: src,
      canvas: container.querySelector("canvas"),
    });
    return () => {
      animation.current.destroy();
    };
  }, [src]);

  useRaf(containerRef.current, function raf() {
    if (!animation.current.isReady) return;

    const timmedProgress = trimProgress(progress.current, playInInterval);
    const totalFrames = animation.current?.totalFrames;
    const frameBounds = setFrameBounds(totalFrames);
    const frame = Math.floor(totalFrames * timmedProgress);

    // handle loading the first frame
    if (prevFrame.current === null && animation.current) {
      animation.current.setFrame(frameBounds[0]);
      prevFrame.current = frameBounds[0];
    }

    if (
      animation.current &&
      timmedProgress >= 0 &&
      timmedProgress <= 1 &&
      frame >= frameBounds[0] &&
      frame <= frameBounds[1] &&
      frame !== prevFrame.current
    ) {
      prevFrame.current = frame;
      animation.current.setFrame(frame);
      onFrameChange({ frame, totalFrames });
    }
  });

  return (
    <StyledScrollLottie ref={containerRef}>
      <canvas />
    </StyledScrollLottie>
  );
};

export default ScrollLottie;
