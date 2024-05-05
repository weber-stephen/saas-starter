import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    id: ID
    name: String
    company: String
    role: String
    verified: Boolean
    status: String
  }
`
export default typeDefs;
