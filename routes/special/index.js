module.exports = (app) => {    
    app.get('*', (req, res) => {
        res.send('Ruta no encontrada')
    })
}