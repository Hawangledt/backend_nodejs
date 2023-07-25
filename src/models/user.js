const { connection } = require('../database/connection')
const { STRING } = require('sequelize')
const { encryptPassword } = require('../utils/functions')

const User = connection.define("user", {
    name: STRING,
    email: {
        type: STRING,
        validate: {
            isEmail: { msg: "Email must be between 5 to 100 characters" },
            len: { args: [1, 100] }
        },
        unique: { msg: "E-mail already registered." }
    },
    password: {
        type: STRING,
        validate: {
            len: { args: [5, 100], msg: "Password must be between 5 to 100 characters" },
            is: {
                args: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{5,})$",
                msg: "Password entered too weak. It must have a number, an uppercase letter and a lowercase letter."
            }
        },
    }
}, {
    underscored: true, paranoid: true, hooks: {
        beforeCreate: encryptPassword,
        beforeUpdate: encryptPassword
    }
})



module.exports = { User }