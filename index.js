const express = require('express')
const app = express()

require('./routes/views')(app)
require('./routes/special')(app)

console.log('Iniciando servidor...')
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000\nlocalhost:3000')
})