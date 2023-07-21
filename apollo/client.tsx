import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;

function getClient() {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_SHOPIFY_URL,
      headers: {
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
      },
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
    });
  }

  return client;
}

export const revalidate = {
  context: {
    fetchOptions: {
      next: { revalidate: 5 },
    },
  },
};

export default getClient;
