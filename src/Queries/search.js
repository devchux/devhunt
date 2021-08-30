import { gql } from "@apollo/client";
import { TOTAL_COUNTS_FRAGMENT } from "./fragments";

export const SEARCH = gql`
${TOTAL_COUNTS_FRAGMENT}
  query Search($query: String!, $type: SearchType!, $last: Int) {
    search(query: $query, type: $type, last: $last) {
      userCount
      nodes {
        ... on User {
          ...totalCountsFragment
        }
      }
    }
  }
`;
