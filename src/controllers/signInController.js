const bcrypt = require('bcrypt')
const emailExistence = require('email-existence')
const User = require('../models/User')

module.exports = {
    async signIn(req, res) {
        const { username, email, password } = req.body

        await emailExistence.check(email, async function (error, response) {
            if (response === false) {
                return res.send('Inexistent or wrong email')
            }

            let encryptedPassword = await bcrypt.hash(password, 5)
            let formatedUsername = username.replace(/\s+/g, ' ')

            await User.create({ username: formatedUsername, email, password: encryptedPassword })

            return res.redirect('/')
        })
    }
}