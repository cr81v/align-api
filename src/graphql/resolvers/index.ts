import { IResolvers } from "apollo-server-express"

const resolvers: IResolvers = {
  Query: {
    health: () => {
      return "All systems go!"
    },
  },
}

export default resolvers
