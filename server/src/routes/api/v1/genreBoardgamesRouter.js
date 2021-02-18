import express from 'express'
import objection from 'objection'
const { ValidationError } = objection

import { BoardGame } from '../../../models/index.js'
import cleanUserInput from '../../../services/cleanUserInput.js'

const genreBoardgamesRouter = new express.Router({ mergeParams: true })

genreBoardgamesRouter.post('/', async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const genreId = req.params.genreId
  try {
    const newBoardGame = await BoardGame.query().insertAndFetch({ ...formInput, genreId})
    return res.status(201).json({ newBoardGame })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default genreBoardgamesRouter