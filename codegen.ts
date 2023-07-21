import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_SHOPIFY_URL]: {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
        },
      },
    },
  ],
  generates: {
    "./gql/types.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
