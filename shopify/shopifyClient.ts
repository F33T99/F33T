import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  privateStorefrontToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL,
  storefrontApiVersion: process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION,
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;

export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
