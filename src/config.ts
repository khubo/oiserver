export default {
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/dropit",
    secretKey: process.env.SECRET_KEY || "pinkFlyingPikachu",
    tokenExpiry: process.env.TOKEN_EXPIRY || "30d"
}
