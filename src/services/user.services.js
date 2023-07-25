const { User } = require("../models/user")

class UserService {
    async updateUserService(id, { name, email, password }) {
        const dataForUpdate = Object.assign({},
            email && { email },
            name && { name },
            password && { password },
        )

        await User.update(
            dataForUpdate,
            { where: { id } }
        )
    }
}

module.exports = new UserService()
