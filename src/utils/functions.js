const bcrypt = require('bcryptjs')


function encryptPassword(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8))
}

module.exports = { encryptPassword }