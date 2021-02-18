import express from 'express'

import { Genre } from '../../../models/index.js'
import GenreSerializer from '../../../serializers/GenreSerializer.js'
import genreBoardgamesRouter from './genreBoardgamesRouter.js'

const genresRouter = new express.Router()

genresRouter.get('/', async (req, res) => {
  try {
    const genres = await Genre.query()
    const serializedGenres = genres.map(genre => {
      return GenreSerializer.getSummary(genre)
    })
    return res.status(200).json({ genres: serializedGenres })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

genresRouter.get('/:id', async (req, res) => {
  try {
    const genreId = req.params.id
    const genre = await Genre.query().findById(genreId)
    const serializedGenre = await GenreSerializer.getDetails(genre)
    return res.status(200).json({ genre: serializedGenre })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

genresRouter.use('/:genreId/boardgames', genreBoardgamesRouter)

export default genresRouter