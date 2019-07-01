const MongoClient = require('mongodb').MongoClient
const config = require('./config')
const connString = `mongodb://${config.DB_HOST}:${config.DB_PORT}`

let instance = null
let isDisconnecting = false

module.exports = {
    connect: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(connString, { useNewUrlParser: true }, (err, client) => {
                if (err) { reject(err) }
                console.log('Conectado satisfactoriamente a Mongo')
                instance = client
                resolve(client.db(config.DB_NAME))
            })
        })
    },
    disconnect: () => {
        if (instance && !isDisconnecting){
            isDisconnecting = true
            console.log('Desconectando instancia de Mongo')
            return new Promise ((resolve, reject) => {
                if (err) { reject(err); isDisconnecting = false; return }
                console.log('Instancia de Mongo desconectada')
                resolve()
            })
        }
    },
    instance: () => {
        return instance
    }
}