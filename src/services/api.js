const axios = require('axios')

const api = axios.create({
  baseURL: process.env.BASE_EXTERNAL_API
})

module.exports = {api}
