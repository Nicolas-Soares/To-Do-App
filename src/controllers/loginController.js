const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async login(req, res) {
        let compareResult = null

        const { email, password } = req.body
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
            return res.redirect(`/tasks/${user.dataValues.id}`)
        }
    }
}