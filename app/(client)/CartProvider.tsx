"use client";

import {
  CartProvider as ShopifyCartProvider,
  ShopifyProvider,
} from "@shopify/hydrogen-react";
import { ReactNode, useContext } from "react";
import { CartToggleContext } from "../../components/Cart/Cart";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const { setShowCart } = useContext(CartToggleContext);
  return (
    <ShopifyProvider
      countryIsoCode='CZ'
      languageIsoCode='CS'
      storeDomain={"https://b023f3.myshopify.com"}
      storefrontApiVersion='2023-04'
      storefrontToken={process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}>
      <ShopifyCartProvider
        onLineAdd={() => {}}
        onLineAddComplete={() => {
          setShowCart(true);
        }}>
        {children}
      </ShopifyCartProvider>
    </ShopifyProvider>
  );
};

export default CartProvider;
