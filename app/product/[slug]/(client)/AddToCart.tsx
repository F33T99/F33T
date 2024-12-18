"use client";

import { useCart } from "@shopify/hydrogen-react";
import {
  CartLineInput,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import InsoleSizeVariants from "../../../../components/InsoleSizeVariants/InsoleSizeVariants";
import { Large } from "../../../../components/Typography/Large";
import { Mini } from "../../../../components/Typography/Mini";
import { Small } from "../../../../components/Typography/Small";
import { formatPrice } from "../../../../helpers/formatPrice";
import { pixel } from "../../../../lib/pixel";
import { tiktok } from "../../../../lib/tiktok";
import {
  Cta,
  PriceContainer,
  StyledAddToCart,
  VariantsContainer,
} from "./StyledAddToCart";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [i, setI] = useState(0);
  const { linesAdd } = useCart();
  const currentVariant = product.variants.nodes[i];
  const merchandise: CartLineInput = {
    merchandiseId: currentVariant.id,
    quantity: 1,
  };

  useEffect(() => {
    tiktok.viewProduct({
      currency: currentVariant.price.currencyCode,
      totalPrice: currentVariant.price.amount,
      contents: [
        {
          price: currentVariant.price.amount,
          content_id: currentVariant.id,
          content_name: product.title,
        },
      ],
    });
    pixel.viewProduct({
      productIds: [product.id],
      currency: currentVariant.price.currencyCode,
      price: currentVariant.price.amount,
    });
  }, [currentVariant.id]);

  const handleAddToCart = () => {
    linesAdd([merchandise]);
    pixel.addToCart({
      price: currentVariant.price.amount,
      currency: currentVariant.price.currencyCode,
      productIds: [currentVariant.id],
    });
    tiktok.addToCart({
      currency: currentVariant.price.currencyCode,
      totalPrice: currentVariant.price.amount,
      contents: [
        {
          price: currentVariant.price.amount,
          content_name: product.title,
          content_id: currentVariant.id,
        },
      ],
    });
  };

  return (
    <StyledAddToCart>
      <VariantsContainer>
        <Mini className="black uppercase">vyber velikost</Mini>
        <InsoleSizeVariants
          variants={product.variants}
          onChange={(i) => setI(i)}
        />
      </VariantsContainer>
      <Cta>
        <PriceContainer>
          <Large className="black price">
            {formatPrice(currentVariant.price.amount)}{" "}
            <Small className="black" as={"span"}>
              s DPH
            </Small>
          </Large>
        </PriceContainer>
        <Button onClick={handleAddToCart} className="x-big">
          {"přidat do košíku"}
        </Button>
      </Cta>
    </StyledAddToCart>
  );
};

export default AddToCart;
