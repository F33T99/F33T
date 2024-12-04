import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import { GET_PRODUCT } from "../gql/GetProduct";
import getClient from "./client";

const getProduct = async (slug: string) => {
  const client = getClient();
  const {
    data: { product },
  } = await client.query<QueryRoot>({
    query: GET_PRODUCT,
    variables: {
      handle: slug,
      first: 99,
      transformImage: {
        maxWidth: 1920,
        maxHeight: 1080,
        preferredContentType: "WEBP",
      },
      identifiers: [
        {
          namespace: "custom",
          key: "benefits",
        },
        { namespace: "custom", key: "reviews" },
      ],
    },
  });
  return product;
};

export default getProduct;
