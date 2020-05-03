import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server'

import typeDefs from './typeDefs'
import resolvers from './resolvers'
import initDB from './services/mongodb'
import logger, { loggerPlugin } from './services/logger'

// load environment variables
config()

// connect to mongodb
initDB()


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    loggerPlugin
  ]
})

// start apollo server
server.listen().then(({ url }) => {
  logger.info(`server start at ${url}`)
})
