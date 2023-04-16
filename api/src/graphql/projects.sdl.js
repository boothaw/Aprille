export const schema = gql`
  type Project {
    id: Int!
    title: String!
    body: String!
    body2: String
    body3: String
    createdAt: DateTime!
    url: String
    url2: String
    url3: String
    url4: String
    url5: String
    url6: String
    url7: String
    url8: String
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    title: String!
    body: String!
    body2: String
    body3: String
    url: String
    url2: String
    url3: String
    url4: String
    url5: String
    url6: String
    url7: String
    url8: String
  }

  input UpdateProjectInput {
    title: String
    body: String
    body2: String
    body3: String
    url: String
    url2: String
    url3: String
    url4: String
    url5: String
    url6: String
    url7: String
    url8: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
