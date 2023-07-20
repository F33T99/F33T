import React, { useRef } from "react";
import { useRaf } from "./useRaf";

export function useScrollInertia(ref) {
  const speed = useRef(0);
  const diamondEls = useRef<NodeListOf<HTMLElement>>();
  useRaf(ref, function raf() {
    speed.current = speed.current * 0.99;

    diamondEls.current?.forEach((diamond) => {
      if (diamond.dataset.inertiaDisable) return;
      if (diamond?.style) {
        const intertia = Number(diamond.dataset.inertiaAmount) || 1;
        diamond.style.transform = `translateY(${
          speed.current * (1 / intertia)
        }%)`;
      }
    });
  });

  const handleWheel = (e: WheelEvent) => {
    speed.current += e.deltaY * 0.8;
  };

  React.useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-inertia]");
    diamondEls.current = els;

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
