import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts(
    $first: Int
    $transformImage: ImageTransformInput
    $identifiers: [HasMetafieldsIdentifier!]!
    $sortKey: ProductSortKeys
  ) {
    products(first: $first, sortKey: $sortKey) {
      edges {
        node {
          id
          title
          tags
          description
          totalInventory
          handle
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
            key
            reference {
              ... on MediaImage {
                __typename
                image {
                  url(transform: $transformImage)
                }
              }
            }
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
