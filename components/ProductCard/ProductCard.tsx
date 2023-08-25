"use client";

import { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { useState } from "react";
import { formatPrice } from "../../helpers/formatPrice";
import Button from "../Button/Button";
import InsoleSizeVariants from "../InsoleSizeVariants/InsoleSizeVariants";
import Line from "../Line/Line";
import { Large } from "../Typography/Large";
import { Mini } from "../Typography/Mini";
import { SectionHeader } from "../Typography/SectionHeader";
import ProductCardCover from "./ProductCardCover";
import {
  ProductCardContent,
  ProductCardHeader,
  StyledProductCard,
} from "./Styles/StyledProductCard";

interface ProductCardProps extends Partial<Product> {}

const ProductCard = ({
  variants,
  title,
  priceRange,
  images,
  handle,
}: ProductCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledProductCard
      href={`/product/${handle}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ProductCardHeader>
        <SectionHeader className='uppercase black tight-lineheight'>
          {title}
        </SectionHeader>
        <ProductCardCover
          src={images.nodes[0].url}
          alt={images.nodes[0].altText}
          hover={hover}
        />
      </ProductCardHeader>
      <ProductCardContent>
        <div>
          <Large className='black tight-lineheight'>
            od {formatPrice(priceRange.minVariantPrice.amount)}
          </Large>
        </div>
        <div>
          <Mini className='black tac'>velikosti skladem</Mini>
          <InsoleSizeVariants variants={variants} disableSelection />
        </div>
        <Button as={"span"} className='big'>
          zjistit více
        </Button>
      </ProductCardContent>
      <Line stroke='gray700' />
    </StyledProductCard>
  );
};

export default ProductCard;
