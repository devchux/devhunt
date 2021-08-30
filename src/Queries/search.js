import { gql } from "@apollo/client";
import { TOTAL_COUNTS_FRAGMENT } from "./fragments";

export const SEARCH = gql`
${TOTAL_COUNTS_FRAGMENT}
  query Search($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      userCount
      nodes {
        ... on User {
          ...totalCountsFragment
        }
      }
    }
  }
`;
