const User = require('../models/User')

module.exports = {
    async login(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({
            where: { email: email, password: password }
        })

        if (user === null) {
            console.log('User not found or wrong credentials')
        } else {
            let name = user.dataValues.username.charAt(0).toUpperCase() + user.dataValues.username.slice(1)

            return res.redirect('/tasks')
        }
    }
}