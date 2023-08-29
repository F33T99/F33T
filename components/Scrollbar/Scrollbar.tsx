"use client";

import React, { useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";
import { StyledScrollbar } from "./Styles/StyledScrollbar";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Props {
  children: React.ReactElement;
  scrollViewportWidthInterval?: number[];
  autoHide?: boolean;
  neutral?: boolean;
}
const Scrollbar = ({
  children,
  autoHide = false,
  scrollViewportWidthInterval = [0, Infinity],
  neutral,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { w } = useWindowSize();
  const isInInterval =
    w >= scrollViewportWidthInterval[0] || w <= scrollViewportWidthInterval[1];

  useEffect(() => {
    function handleResize() {
      if (!isInInterval) return;
      const childEl = ref.current.childNodes[0] as HTMLElement;

      childEl.style.cssText = "display: none;";
      ref.current.style.cssText = `height: 100%;`;
      const refHeight = ref.current.clientHeight;

      ref.current.style.cssText = `height: ${refHeight}px;`;
      childEl.style.cssText = "display: block;height:100%;";
    }

    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [ref.current]);

  return isInInterval ? (
    <StyledScrollbar ref={ref} $neutral={neutral}>
      <SimpleBar autoHide={autoHide}>{children}</SimpleBar>
    </StyledScrollbar>
  ) : (
    children
  );
};

export default Scrollbar;
