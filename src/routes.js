const express = require('express')
const signInController = require('./controllers/signInController')
const loginController = require('./controllers/loginController')

const routes = express.Router()

routes.get('/', function(req, res) {
    res.render('index', {
        title: 'Login',
        css: ['indexStyle.css']
    })
})
routes.post('/', loginController.login)

routes.get('/create-account', function(req, res) {
    res.render('signForm', { title: 'Sign In', css: ['defaultStyle.css', 'signFormStyle.css'] })
})
routes.post('/create-account',  signInController.signIn)

routes.get('/tasks', function(req, res) {
    res.render('tasks', {
        content: 'Hello',
        title: 'My Tasks',
        css: ['tasksStyle.css']
    })
})

module.exports = routes