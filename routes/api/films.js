const API_PATH = '/api'
// const films = require('../../resources/films')
const { getFilms, getFilmById, postFilm, deleteFilmById, updateFilm } = require('../../db')

module.exports = (app) => {
    app.get(`${API_PATH}/films`, async (req, res) => {
        const films = await getFilms()
        res.json(films)
    })

    app.get(`${API_PATH}/films/:id`, async (req, res) => {
        const id = req.params.id
        const film = await getFilmById(id)
        res.json(film)
    })

    app.post(`${API_PATH}/film`, async (req, res) => {
        const film = JSON.parse(req.body.film)
        if (film) {
            const resp = await postFilm(film)
            return res.json(resp)
        }
        res.status(400).send({ reason: 'No film sent.' })
    })

    app.delete(`${API_PATH}/film/:id`, async (req, res) => {
        const id = req.params.id
        if (id) {
            const resp = await deleteFilmById(id)
            return res.json(resp)
        }
        res.status(400).send({ reason: 'No id sent.' })
    })

    app.put(`${API_PATH}/film/:id`, async (req, res) => {
        const id = req.params.id
        const film = req.body
        if (id) {
            const resp = await updateFilm(id, film)
            return res.json(resp)
        }
        res.status(400).send({ reason: 'No updated film sent.' })
    })
}