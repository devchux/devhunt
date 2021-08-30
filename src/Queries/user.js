import { gql } from "@apollo/client";
import { TOTAL_COUNTS_FRAGMENT } from "./fragments";

export const USER = gql`
  ${TOTAL_COUNTS_FRAGMENT}
  query User(
    $login: String!,
    $repositories: Int,
    $followers: Int,
    $following: Int
  ) {
    user(login: $login) {
      avatarUrl
      bio
      name
      location
      twitterUsername
      company
      login
      url
      websiteUrl
      repositories(last: $repositories) {
        totalCount
        nodes {
          name
          url
          stargazerCount
          description
        }
      }
      followers(first: $followers) {
        totalCount
        nodes {
          ...totalCountsFragment,
        }
      }
      following(first: $following) {
        totalCount
        nodes {
          ...totalCountsFragment,
        }
      }
    }
  }
`;
