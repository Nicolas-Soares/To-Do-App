const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const EXPHandlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const { config } = require('dotenv')
const { join } = require('path')
const app = express()

require('./database')

const configPath = join(__dirname, '../', '.env.prod')
config({
  path: configPath
})

app.engine('handlebars', EXPHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log('Server running'))