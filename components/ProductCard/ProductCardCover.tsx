import {
  ProductCardCoverImage,
  StyledProductCardCover,
} from "./Styles/StyledProductCardCover";

interface ProductCardCoverProps {
  src: string;
  alt: string;
  hover?: boolean;
}

const ProductCardCover = ({ src, alt, hover }: ProductCardCoverProps) => {
  return (
    <StyledProductCardCover animate={{ skewY: hover ? "2deg" : "0deg" }}>
      <ProductCardCoverImage src={src} alt={alt} width={2000} height={1000} />
    </StyledProductCardCover>
  );
};

export default ProductCardCover;
