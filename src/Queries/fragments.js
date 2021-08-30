import { gql } from "@apollo/client";

export const TOTAL_COUNTS_FRAGMENT = gql`
  fragment totalCountsFragment on User {
    avatarUrl
    name
    login
    repositories {
      totalCount
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
`;
