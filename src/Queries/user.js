import { gql } from '@apollo/client';

export const USER = gql`
  query User($login: String!, $first: Int) {
    user(login: $login) {
      avatarUrl
      bio
      name
      location
      twitterUsername
      company
      repositories(first: $first) {
        totalCount
        nodes {
          name
          url
          stargazerCount
          description
        }
      }
      followers(first: $first) {
        totalCount
        nodes {
          name
          avatarUrl
          login
        }
      }
      following(first: $first) {
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