export const schema = gql`
  type Screenprint {
    id: Int!
    title: String!
    url: String!
  }

  type Query {
    screenprints: [Screenprint!]! @requireAuth
    screenprint(id: Int!): Screenprint @requireAuth
  }

  input CreateScreenprintInput {
    title: String!
    url: String!
  }

  input UpdateScreenprintInput {
    title: String
    url: String
  }

  type Mutation {
    createScreenprint(input: CreateScreenprintInput!): Screenprint! @requireAuth
    updateScreenprint(id: Int!, input: UpdateScreenprintInput!): Screenprint!
      @requireAuth
    deleteScreenprint(id: Int!): Screenprint! @requireAuth
  }
`
