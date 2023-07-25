const { api } = require("../services/api")

class BeerController {
    async consultAPI(request, response) {
        try {
            const { offset, limit } = request.params
            const beers = await api.get(`/beers?page=${offset}&per_page=${limit}`)

            return response.status(200).send({ beers: beers.data })
        } catch (error) {
            return response.status(400).send(
                {
                    message: "Error to consult the external api",
                    cause: error.message
                })
        }
    }
}

module.exports = new BeerController()