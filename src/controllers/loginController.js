const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async login(req, res) {
        const { email, password } = req.body

        let compareResult = null

        const user = await User.findOne({
            where: { email: email }
        })

        if (user) {
            let hash = user.dataValues.password
            compareResult = await bcrypt.compare(password, hash)
        }

        if (!user || compareResult !== true) {
            console.log('User not found or wrong credentials')
        } else {
            //let name = user.dataValues.username.charAt(0).toUpperCase() + user.dataValues.username.slice(1)
            return res.redirect('/tasks')
        }
    }
}