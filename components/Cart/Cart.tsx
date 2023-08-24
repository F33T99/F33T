"use client";

import { CartLineProvider, useCart } from "@shopify/hydrogen-react";
import { Large } from "../Typography/Large";
import CartItem from "./CartItem";
import { StyledCart } from "./Styles/StyledCart";

interface CartProps {}

const Cart = ({}: CartProps) => {
  const { lines, linesUpdate } = useCart();

  return (
    <StyledCart>
      <Large className='uppercase black'>Košík</Large>
      {lines.map((line) => {
        return (
          <CartLineProvider line={line}>
            <CartItem />
          </CartLineProvider>
        );
      })}
    </StyledCart>
  );
};

export default Cart;
