import { gql } from "@apollo/client";

export const USER = gql`
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
      repositories(first: $repositories) {
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
          name
          avatarUrl
          login
        }
      }
      following(first: $following) {
        totalCount
        nodes {
          name
          avatarUrl
          login
        }
      }
    }
  }
`;
