import React from "react";
import {
  ProductCardCoverImage,
  StyledProductCardCover,
  StyledTriangle,
} from "./Styles/StyledProductCardCover";
import { colors } from "../../consts/colors";
import { motion } from "framer-motion";
import { easing } from "../../consts/animationConfig";

interface ProductCardCoverProps {
  src: string;
  alt: string;
  hover?: boolean;
}

interface TriangleProps {
  className: string;
  hover: boolean;
  direction?: number;
}

const Triangle = ({ className, hover, direction }: TriangleProps) => {
  return (
    <StyledTriangle className={className}>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width='206'
        animate={{
          x: hover ? -30 : 0,
          y: hover ? -30 : 0,
        }}
        transition={{ ease: easing, duration: 0.4 }}
        height='206'
        viewBox='0 0 206 206'>
        <path d='M0,0H206L0,206Z' fill={colors.gray300} />
      </motion.svg>
    </StyledTriangle>
  );
};

const ProductCardCover = ({ src, alt, hover }: ProductCardCoverProps) => {
  return (
    <StyledProductCardCover>
      <Triangle className={"top-left"} hover={hover} direction={1} />
      <ProductCardCoverImage src={src} alt={alt} width={2000} height={1000} />
      <Triangle className={"bottom-right"} hover={hover} direction={-1} />
    </StyledProductCardCover>
  );
};

export default ProductCardCover;
