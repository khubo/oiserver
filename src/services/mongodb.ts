import mongoose from 'mongoose'
import config from '../config'
import logger from './logger'


export default async () => {
    try {
        const mongoURI = config.mongoURI
        // connect to mongo db
        await mongoose.connect(mongoURI)
        logger.info("successfully connect to db")
    } catch (e) {
        logger.error("failed to connect to db")
    }
}