import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import getClient from "../apollo/client";
import { GET_PRODUCTS_SLUGS } from "../gql/GetProductsSlugs";

const domain = "https://f33t.cz";
const date = new Date();
const generateRow = (url) => ({
  url: `${domain}/${url}`,
  lastModified: date,
});

export default async function sitemap() {
  const client = getClient();

  const pages = ["", "products"].map((p) => generateRow(p));

  const products = await client.query<QueryRoot>({
    query: GET_PRODUCTS_SLUGS,
    variables: { first: 99 },
  });

  const dynamicPages = products.data.products.edges.map((p) =>
    generateRow(`product/${p.node.handle}`)
  );

  return [...pages, ...dynamicPages];
}
