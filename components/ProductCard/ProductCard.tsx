"use client";

import { Product } from "@shopify/hydrogen-react/storefront-api-types";
import { Large } from "../Typography/Large";
import ProductCardCover from "./ProductCardCover";
import {
  ProductCardContent,
  StyledProductCard,
} from "./Styles/StyledProductCard";
import { formatPrice } from "../../helpers/formatPrice";
import InsoleSizeVariants from "../InsoleSizeVariants/InsoleSizeVariants";
import { Mini } from "../Typography/Mini";
import Button from "../Button/Button";
import { useState } from "react";
import Line from "../Line/Line";

interface ProductCardProps extends Partial<Product> {}

const ProductCard = ({
  variants,
  title,
  priceRange,
  images,
}: ProductCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledProductCard
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ProductCardCover src={images.nodes[0].url} alt={""} hover={hover} />
      <ProductCardContent>
        <div>
          <Large className='uppercase black tight-lineheight'>{title}</Large>
          <Large className='black tight-lineheight'>
            od {formatPrice(priceRange.minVariantPrice.amount)}
          </Large>
        </div>
        <div>
          <Mini className='black tac'>velikosti skladem</Mini>
          <InsoleSizeVariants variants={variants} disableSelection />
        </div>
        <Button className='big'>zjistit více</Button>
      </ProductCardContent>
      <Line stroke='red400' />
    </StyledProductCard>
  );
};

export default ProductCard;
