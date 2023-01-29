export const schema = gql`
  type Project {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]! @skipAuth
    project(id: Int!): Project @skipAuth
  }

  input CreateProjectInput {
    title: String!
    body: String!
  }

  # // problem below - update project input

  input UpdateProjectInput {
    title: String
    body: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
