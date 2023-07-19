import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

export function useRaf(containerRef, _raf) {
  const isIntersecting = useRef<boolean>(false);
  const rafId = useRef<number>(null);

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
      _raf();
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [_raf]);
}
