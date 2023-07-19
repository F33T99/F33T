import { DotLottiePlayer, DotLottieRefProps } from "@dotlottie/react-player";
import { useContext, useEffect, useRef } from "react";
import { trimProgress } from "../../helpers/trimProgress";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { ScrollAnimationContext } from "../ScrollAnimation/ScrollAnimation";

interface ScrollLottieProps {
  src: string;
  playInInterval?: number[];
}

const ScrollLottie = ({ src, playInInterval = [0, 1] }: ScrollLottieProps) => {
  const { dryScrollYProgress } = useContext(ScrollAnimationContext);
  const rafId = useRef<number>(null);
  const lottieRef = useRef<DotLottieRefProps>();
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useRef<boolean>(false);

  useIntersectionObserver(
    containerRef,
    (entries) => {
      entries.forEach((entry) => {
        isIntersecting.current = entry.isIntersecting;
      });
    },
    { threshold: [0, 1] }
  );

  useEffect(() => {
    function raf() {
      if (!isIntersecting.current) {
        rafId.current = requestAnimationFrame(raf);
        return;
      }

      const lottie = lottieRef.current?.getLottie();
      const timmedProgress = trimProgress(
        dryScrollYProgress.current.progress,
        playInInterval
      );

      if (timmedProgress >= 0 && timmedProgress <= 1) {
        lottie?.goToAndStop(lottie.totalFrames * timmedProgress, true);
      }
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [dryScrollYProgress, lottieRef]);

  return (
    <div ref={containerRef}>
      <DotLottiePlayer lottieRef={lottieRef} src={src} renderer='svg' />
    </div>
  );
};

export default ScrollLottie;
