import { gql } from "@apollo/client";

export const GET_PRODUCTS_SLUGS = gql`
  query GetProducts($first: Int) {
    products(first: $first) {
      edges {
        node {
          id
          handle
        }
      }
    }
  }
`;
