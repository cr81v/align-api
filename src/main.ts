import express from "express"
import { ApolloServer } from "apollo-server-express"
import resolvers from "./graphql/resolvers"
// @ts-ignore
import typeDefs from "./graphql/schema/schema.graphql"

const PORT = 3001
const app = express()
const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app, path: "/api" })

app.listen(PORT, () => {
  console.log(`[app]: http://localhost:${PORT}`)
})
