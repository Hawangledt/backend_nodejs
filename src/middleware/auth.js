const { config } = require('dotenv')
const { verify } = require('jsonwebtoken')
config()


async function auth(request, response, next){
    try {
        const { authorization } = request.headers
        request["payload"] = verify(authorization, process.env.JWT_SECRET)
        next()
    } catch (error) {
        return response.status(401).send({
            message: "Authentication Failed",
            cause: error.message})
    }
}

module.exports = { auth }
