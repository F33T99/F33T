import React from "react";
import {
  Gallery,
  GalleryImage,
  GlobalProduct,
  ProductContent,
  ProductInfo,
  StyledProduct,
} from "./(client)/StyledProduct";
import getClient from "../../../apollo/client";
import { GET_PRODUCT } from "../../../gql/GetProduct";
import console from "console";
import { Mini } from "../../../components/Typography/Mini";
import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";

interface PageProps {
  params: { slug: string };
}

const page = async ({ params: { slug } }: PageProps) => {
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
      identifiers: {
        namespace: "custom",
        key: "benefits",
      },
    },
  });

  return (
    <>
      <GlobalProduct />
      <StyledProduct data-theme='light'>
        <ProductContent>
          <Gallery>
            {product.images.nodes.map(({ url, width, height, altText }) => (
              <GalleryImage
                src={url}
                width={width}
                height={height}
                alt={altText}
              />
            ))}
          </Gallery>
          <ProductInfo></ProductInfo>
        </ProductContent>
      </StyledProduct>
    </>
  );
};

export default page;
