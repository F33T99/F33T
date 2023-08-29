"use client";

import {
  MediaImage,
  Metafield,
  MetafieldReference,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
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
  ProductCardButton,
  ProductCardContent,
  ProductCardHeader,
  ProductCardPrice,
  ProductCardVariants,
  StyledProductCard,
} from "./Styles/StyledProductCard";

interface ProductCardProps extends Partial<Product> {}

function getMetafieldReference<T>(metafields: Metafield[], key: string): T {
  console.log(metafields);

  const m = metafields.find((m) => m?.key === key);

  return m?.reference as T;
}

const ProductCard = ({
  variants,
  title,
  priceRange,
  images,
  handle,
  metafields,
}: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const coverPhotoRef = getMetafieldReference<MediaImage>(
    metafields,
    "products-cover"
  );
  console.log(coverPhotoRef);

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
          src={coverPhotoRef?.image.url}
          alt={coverPhotoRef?.image.altText}
          // hover={hover}
        />
      </ProductCardHeader>
      <ProductCardContent>
        <ProductCardPrice>
          <Large className='black tight-lineheight price'>
            od {formatPrice(priceRange.minVariantPrice.amount)}
          </Large>
        </ProductCardPrice>
        <ProductCardVariants>
          <Mini className='black tac'>velikosti skladem</Mini>
          <InsoleSizeVariants variants={variants} disableSelection />
        </ProductCardVariants>
        <ProductCardButton>
          <Button as={"span"} className='big'>
            zjistit více
          </Button>
        </ProductCardButton>
      </ProductCardContent>
      <Line stroke='gray700' />
    </StyledProductCard>
  );
};

export default ProductCard;
