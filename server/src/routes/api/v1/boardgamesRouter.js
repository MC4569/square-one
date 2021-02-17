import express from 'express'

import { BoardGame } from '../../../models/index.js'
import BoardGameSerializer from '../../../serializers/BoardGameSerializer.js'

const boardgamesRouter = new express.Router()

boardgamesRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const userId = req.query.userId
  try {
    const boardgame = await BoardGame.query().findById(id)
    const serializedBoardgame = await BoardGameSerializer.getDetails(boardgame, userId)
    return res.status(200).json({ boardgame: serializedBoardgame })
  } catch (error) {
    return res.status(500).json({ errors })
  }
})

export default boardgamesRouter