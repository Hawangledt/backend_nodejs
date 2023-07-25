const { config } = require('dotenv')
config()

module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  port: process.env.PORT_DB,
  define: {
    underscored: true,
    underscoredAll: true
  }
}