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
            const hash = user.dataValues.password
            compareResult = await bcrypt.compare(password, hash)
        }

        if (!user || compareResult !== true) {
            return res.status(400).json({
                error: '400 Bad Request',
                message: 'User not found or wrong credentials'
            })
        } else {
            res.cookie('userId', user.dataValues.id)
            return res.redirect(`/tasks/${user.dataValues.id}`)
        }
    }
}