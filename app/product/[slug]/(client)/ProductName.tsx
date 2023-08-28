"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../../../../consts/colors";

interface ProductNameProps {
  children: string;
}

const StyledProductName = styled.h1`
  line-height: 1em;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  color: ${colors.black};
`;

const ProductName = ({ children }: ProductNameProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      ref.current.style.cssText = `font-size: 1px`;
      const containerElBB = ref.current.getBoundingClientRect();

      const paretnElWidth = ref.current.parentElement.clientWidth;
      const textAspectRatio = containerElBB.height / containerElBB.width;

      ref.current.style.cssText = `font-size: ${
        paretnElWidth * textAspectRatio
      }px`;
    };

    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <StyledProductName ref={ref}>{children}</StyledProductName>
    </div>
  );
};

export default ProductName;
