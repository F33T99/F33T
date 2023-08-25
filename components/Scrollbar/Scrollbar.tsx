"use client";

import React, { useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";
import { StyledScrollbar } from "./Styles/StyledScrollbar";

interface Props {
  children: React.ReactElement;
  applyScrollbar?: boolean;
  autoHide?: boolean;
  neutral?: boolean;
}
const Scrollbar = ({
  children,
  autoHide = false,
  applyScrollbar = true,
  neutral,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
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

  return applyScrollbar ? (
    <StyledScrollbar ref={ref} neutral={neutral}>
      <SimpleBar autoHide={autoHide}>{children}</SimpleBar>
    </StyledScrollbar>
  ) : (
    children
  );
};

export default Scrollbar;
