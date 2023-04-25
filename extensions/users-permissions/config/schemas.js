module.exports = {
  definition: `
    type UsersPermissionsMe {
      id: ID!
      username: String!
      email: String!
      confirmed: Boolean
      blocked: Boolean
      role: UsersPermissionsMeRole
      store: Store
    }
  `,
  query: `
    me: UsersPermissionsMe
  `,
  resolver: {
    Query: {
      me: {
        resolver: "plugins::users-permissions.user.me",
      },
    },
  },
};
