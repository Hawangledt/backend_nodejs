const express = require('express')
const cors = require('cors')
const { connection } = require('./database/connection')
const { PORT } = process.env
const routes = require('./routes')

class Server {
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        this.allRoutes(server)
        this.initializeServer(server)
    }

    async middlewares(app) {
        app.use(cors())
        app.use(express.json())
    }

    async database() {
        try {
            await connection.authenticate()
            console.log('Successful connection!')
        } catch (error) {
            console.error('Unable to connect to the database.', error)
            throw error
        }
    }
    async initializeServer(app) {

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    }

    async allRoutes(app) {
        app.use(routes)
    }
}

module.exports = { Server }