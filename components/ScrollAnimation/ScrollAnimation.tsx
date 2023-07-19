"use client";

import {
  LegacyRef,
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { StyledScrollAnimation } from "./Styles/StyledScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;
  offset?: number[];
  disableIntersectionObserver?: boolean;
}

export const ScrollAnimationContext = createContext<{
  animationElRef: LegacyRef<HTMLDivElement>;
  scrollYProgress: {
    progress: number;
    totalDistance: number;
    currentPos: number;
  };
}>(null);

const ScrollAnimation = ({
  children,
  offset = [0, 0],
  disableIntersectionObserver = false,
}: ScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationElRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useRef<boolean>(false);
  const [scrollYProgress, setScrollYProgress] = useState({
    progress: 0,
    totalDistance: 0,
    currentPos: 0,
  });
  const rafId = useRef<number>(0);

  useIntersectionObserver(
    containerRef,
    (entries) => {
      entries.forEach((entry) => {
        isIntersecting.current = entry.isIntersecting;
      });
    },
    {
      rootMargin: `${-1 * offset[0] * 100}% 0% ${-1 * offset[1] * 100}% 0%`,
    }
  );

  useEffect(() => {
    function raf() {
      if (!isIntersecting.current && !disableIntersectionObserver) {
        rafId.current = requestAnimationFrame(raf);
        return;
      }

      const scrollY = window.scrollY;
      const animElHeight = animationElRef.current.clientHeight;
      const viewportHeight = window.innerHeight;

      const animElOffsetFromTop = animationElRef.current.offsetTop;
      const animElOffsetFromBottom = animElOffsetFromTop + animElHeight;

      const topBound = viewportHeight * offset[0];
      const bottomBound = viewportHeight * offset[1];
      const scrolledDistance = scrollY + viewportHeight;

      const currentPos = scrolledDistance - (animElOffsetFromTop + bottomBound);
      const totalDistance =
        animElOffsetFromBottom +
        viewportHeight -
        (animElOffsetFromTop + bottomBound) -
        topBound;
      const progress = currentPos / totalDistance;

      if (progress < 0 || progress > 1) {
        rafId.current = requestAnimationFrame(raf);
        return;
      }

      setScrollYProgress({ progress, currentPos, totalDistance });

      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <ScrollAnimationContext.Provider
      value={{ animationElRef, scrollYProgress }}>
      <StyledScrollAnimation ref={containerRef}>
        {children}
      </StyledScrollAnimation>
    </ScrollAnimationContext.Provider>
  );
};

export default ScrollAnimation;
