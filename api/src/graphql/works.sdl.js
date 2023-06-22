export const schema = gql`
  type Work {
    id: Int!
    title: String!
    url: String!
    description: String
  }

  type Query {
    works: [Work!]! @requireAuth
    work(id: Int!): Work @requireAuth
  }

  input CreateWorkInput {
    title: String!
    url: String!
    description: String
  }

  input UpdateWorkInput {
    title: String
    url: String
    description: String
  }

  type Mutation {
    createWork(input: CreateWorkInput!): Work! @requireAuth
    updateWork(id: Int!, input: UpdateWorkInput!): Work! @requireAuth
    deleteWork(id: Int!): Work! @requireAuth
  }
`
