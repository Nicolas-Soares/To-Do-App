const User = require('../models/User')

module.exports = {
    async signIn(req, res) {
        const { username, email, password } = req.body

        let formatedUsername = username.replace(/\s+/g, ' ')
        
        await User.create({ username: formatedUsername , email, password })

        return res.redirect('/')
    }
}