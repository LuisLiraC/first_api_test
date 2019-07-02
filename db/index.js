const mongo = require('./connect')
const { DB_NAME } = require('./config')

module.exports = {
    getFilms: () => {
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection('films').find().toArray()
        return resp
    },
    getFilmById: (id) => {
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection('films').find({ id }).toArray()
        return resp
    },
    postFilm: (film) => {
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection('films').insertOne(film)
        return resp
    },
    deleteFilmById: (id) => {
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection('films').deleteOne({ id })
        return resp
    },
    updateFilm: (id, film) => {
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection('films').updateOne({ 'id': id }, {
            $set: {
                title: film.title,
                director: film.director
            }
        })
        return resp
    }
}