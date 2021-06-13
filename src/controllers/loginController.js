const User = require('../models/User')

module.exports = {
    async login(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({
            where: { email: email, password: password }
        })

        if (user === null) {
            console.log('Not found or wrong credentials')
            return res.json(user)
        } else {
            let name = user.dataValues.username.charAt(0).toUpperCase() + user.dataValues.username.slice(1)

            res.render('tasks', {
                content: 'Hello',
                username: name,
                title: 'My Tasks',
                css: ['tasksStyle.css']
            })
        }
    }
}