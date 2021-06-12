const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const EXPHandlebars = require('express-handlebars')

require('./database')

const app = express()

app.engine('handlebars', EXPHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'))