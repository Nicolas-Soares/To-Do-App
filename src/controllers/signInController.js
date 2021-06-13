const User = require('../models/User')

module.exports = {
    async cadastrar(req, res) {
        const { username, email, password } = req.body

        const user = await User.create({ username, email, password })

        return res.json(user)
    }
}