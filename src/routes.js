const express = require('express')
const signInController = require('./controllers/signInController')
const loginController = require('./controllers/loginController')

const routes = express.Router()

routes.get('/', function(req, res) {
    res.render('index', { title: 'Login', css: ['indexStyle.css'] })
})

routes.post('/tasks', loginController.login)

module.exports = routes