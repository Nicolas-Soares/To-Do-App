const bcrypt = require('bcrypt')
const emailExistence = require('email-existence')
const User = require('../models/User')

module.exports = {
    async signIn(req, res) {
        const { username, email, password } = req.body
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (user) {
            return res.status(409).json({
                title: '409 Conflict',
                message: 'Email inexistent or already in use'
            })
        }

        await emailExistence.check(email, async function (error, response) {
            if (response === false) {
                return res.status(400).json({
                    error: '400 Bad Request',
                    message: 'Inexistent or wrong email'
                })
            }

            const encryptedPassword = await bcrypt.hash(password, 5)
            const formatedUsername = username.replace(/\s+/g, ' ')

            await User.create({ username: formatedUsername, email, password: encryptedPassword })

            return res.redirect('/')
        })
    }
}