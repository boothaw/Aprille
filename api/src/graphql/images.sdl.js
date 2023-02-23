export const schema = gql`
  type Image {
    id: Int!
    title: String!
    url: String!
  }

  type Query {
    images: [Image!]! @skipAuth
    image(id: Int!): Image @skipAuth
  }

  input CreateImageInput {
    title: String!
    url: String!
  }

  input UpdateImageInput {
    title: String
    url: String
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
