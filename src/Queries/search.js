import { gql } from "@apollo/client";

export const SEARCH = gql`
  query Search($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      userCount
      nodes {
        ... on User {
          avatarUrl
          name
          location
          login
        }
      }
    }
  }
`;
