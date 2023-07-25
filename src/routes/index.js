const { Router } = require('express')
const { routesFromUser } = require('./user.routes')
const { routesFromBeer } = require('./beer.routes')


const routes = new Router()

routes.use('/api', [
  routesFromUser(),
  routesFromBeer(),
])

module.exports = routes
