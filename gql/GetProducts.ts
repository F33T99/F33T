import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts(
    $first: Int
    $transformImage: ImageTransformInput
    $identifiers: [HasMetafieldsIdentifier!]!
  ) {
    products(first: $first) {
      edges {
        node {
          id
          title
          tags
          description
          totalInventory
          priceRange {
            maxVariantPrice {
              currencyCode
              amount
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: $first) {
            nodes {
              weight
              weightUnit
              quantityAvailable
              id
              title
              currentlyNotInStock
              price {
                amount
                currencyCode
              }
            }
          }
          metafields(identifiers: $identifiers) {
            value
            type
          }
          images(first: $first) {
            nodes {
              url(transform: $transformImage)
              width
              height
              altText
              id
            }
          }
        }
      }
    }
  }
`;
