const express = require('express')
const signInController = require('./controllers/signInController')
const loginController = require('./controllers/loginController')
const tasksController = require('./controllers/tasksController')

const routes = express.Router()

//ROOT -----
routes.get('/', function (req, res) {
    res.cookie('userId', undefined)
    res.render('index', {
        title: 'Login'
    })
})
routes.post('/', loginController.login)

//CREATE ACCOUNT -----
routes.get('/create-account', function (req, res) {
    res.render('signForm', {
        title: 'Sign In'
    })
})
routes.post('/create-account', signInController.signIn)

//TASKS -----
routes.get('/tasks/:user_id', tasksController.renderTasks)
routes.post('/tasks/:user_id', tasksController.addTask)
routes.post('/tasks/:user_id/delete', tasksController.deleteTask)
routes.post('/tasks/:user_id/check', tasksController.checkTask)

module.exports = routes