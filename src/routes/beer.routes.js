const { consultAPI} = require('../controllers/beer.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class BeerRouter {
  routesFromBeer () {
    try {
      const beerRoutes = Router()
      beerRoutes.get('/consultAPI/:offset/:limit', auth, consultAPI)

      return beerRoutes
    } catch (error) {
      return "Message: External API is unavailable"
    }
  }
}

module.exports = new BeerRouter()