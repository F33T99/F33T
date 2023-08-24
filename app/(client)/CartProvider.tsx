"use client";

import {
  CartProvider as ShopifyCartProvider,
  ShopifyProvider,
} from "@shopify/hydrogen-react";
import { ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  return (
    <ShopifyProvider
      countryIsoCode='CZ'
      languageIsoCode='CS'
      storeDomain={"https://b023f3.myshopify.com"}
      storefrontApiVersion='2023-04'
      storefrontToken={process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}>
      <ShopifyCartProvider
        onLineAdd={() => {
          console.log("line added");
        }}
        onLineAddComplete={() => {
          console.log("a line has been added");
        }}>
        {children}
      </ShopifyCartProvider>
    </ShopifyProvider>
  );
};

export default CartProvider;
