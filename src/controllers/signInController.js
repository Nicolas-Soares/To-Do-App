const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async signIn(req, res) {
        const { username, email, password } = req.body
        
        let encryptedPassword = await bcrypt.hash(password, 5)

        let formatedUsername = username.replace(/\s+/g, ' ')
        
        await User.create({ username: formatedUsername , email, password: encryptedPassword })

        return res.redirect('/')
    }
}