import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Joke {
    _id: ID!
    type: String
    setup: String
    punchline: String
  }

  type Query {
    jokeRandom: [Joke]
    jokeSearch(term: String!): [Joke]
    jokeByID(id: String!): Joke
    jokeByType(type: String!): [Joke]
  }
`;
