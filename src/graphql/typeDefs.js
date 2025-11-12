// src\typeDefs.js
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String
    author: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreatePostInput {
    title: String!
    content: String
    authorId: ID!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    createPost(input: CreatePostInput!): Post
  }
`;
