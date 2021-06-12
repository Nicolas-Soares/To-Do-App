const express = require('express')
const SignInController = require('./controllers/signInController')

const routes = express.Router()

routes.get('/', function(req, res) {
    res.render('index')
})
routes.post('/', SignInController.cadastrar)

module.exports = routes