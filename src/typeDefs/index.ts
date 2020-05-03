import { gql } from 'apollo-server'

export default gql`
  type Query {
    greet(name: String): String
    getToken(type: String): String
  }
`
