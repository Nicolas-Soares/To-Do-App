const express = require('express')
const signInController = require('./controllers/signInController')
const loginController = require('./controllers/loginController')
const tasksController = require('./controllers/tasksController')

const routes = express.Router()

//ROOT -----
routes.get('/', function (req, res) {
    res.render('index', {
        title: 'Login',
        css: ['indexStyle.css', 'defaultStyle.css']
    })
})
routes.post('/', loginController.login)

//CREATE ACCOUNT -----
routes.get('/create-account', function (req, res) {
    res.render('signForm', {
        title: 'Sign In',
        css: ['defaultStyle.css', 'signFormStyle.css']
    })
})
routes.post('/create-account', signInController.signIn)

//TASKS -----
routes.get('/tasks/:user_id', function(req, res) {
    let { user_id } = req.params

    tasksController.renderTasks(user_id, res)
})
routes.post('/tasks/:user_id', function (req, res) {
    let { user_id } = req.params
    let { name } = req.body

    tasksController.addTask(user_id, name)
    return res.redirect(req.get('referer'))
})

module.exports = routes