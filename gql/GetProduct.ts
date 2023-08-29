import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct(
    $first: Int
    $handle: String
    $transformImage: ImageTransformInput
    $identifiers: [HasMetafieldsIdentifier!]!
  ) {
    product(handle: $handle) {
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
        key
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
`;
