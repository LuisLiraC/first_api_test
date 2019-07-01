const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./routes/views')(app)
require('./routes/api')(app)
require('./routes/special')(app)

console.log('Iniciando servidor...')
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000\nlocalhost:3000')
})