const mongo = require('./connect')
const argv = require('yargs').argv
const collection = 'films'
const data = require(`../resources/${collection}`)

if (argv.fill) {
    mongo.connect()
        .then(db => {
            db.collection(collection).insertMany(data, (err, result) => {
                if (err) throw err
                console.log('Los datos se han creado satisfactoriamente')
                mongo.disconnect()
            })
        })
    return
}

if (argv.clear) {
    mongo.connect()
        .then(db => {
            db.collection(collection).drop((err, result) => {
              if (err) throw err
              console.log('La colección se ha eliminado satisfactoriamente')
              mongo.disconnect()
            })
        })
    return
}