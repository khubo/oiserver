import pino from 'pino'

// create a logger singleton
const logger = pino()

export default logger


export const loggerPlugin = {

    // log arrival of request
    requestDidStart(reqContext: any): void {
        const { query } = reqContext.request

        // skip graphql default client's introspection queries
        if (process.env.NODE_ENV === "dev" && query.includes("IntrospectionQuery")) return

        // log the query
        logger.info(`query: ${reqContext.request.query}`)
    }
}