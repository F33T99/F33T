"use client";

import { useCart } from "@shopify/hydrogen-react";
import {
  CartLineInput,
  Product,
} from "@shopify/hydrogen-react/storefront-api-types";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import InsoleSizeVariants from "../../../../components/InsoleSizeVariants/InsoleSizeVariants";
import { Large } from "../../../../components/Typography/Large";
import { Mini } from "../../../../components/Typography/Mini";
import { Small } from "../../../../components/Typography/Small";
import { formatPrice } from "../../../../helpers/formatPrice";
import {
  StyledAddToCart,
  VariantsContainer,
  Cta,
  PriceContainer,
} from "./StyledAddToCart";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [i, setI] = useState(0);
  const { linesAdd, status, lines } = useCart();

  const merchandise: CartLineInput = {
    merchandiseId: product.variants.nodes[i].id,
    quantity: 1,
  };

  return (
    <StyledAddToCart>
      <VariantsContainer>
        <Mini className='black uppercase'>vyber velikost</Mini>
        <InsoleSizeVariants
          variants={product.variants}
          onChange={(i) => setI(i)}
        />
      </VariantsContainer>
      <Cta>
        <PriceContainer>
          <Large className='black price'>
            {formatPrice(product.variants.nodes[i].price.amount)}{" "}
            <Small className='black' as={"span"}>
              s DPH
            </Small>
          </Large>
        </PriceContainer>
        <Button
          onClick={() => {
            linesAdd([merchandise]);
          }}
          className='x-big'>
          {"přidat do košíku"}
        </Button>
      </Cta>
    </StyledAddToCart>
  );
};

export default AddToCart;
