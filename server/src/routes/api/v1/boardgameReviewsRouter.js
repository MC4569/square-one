import express from 'express' 
import cleanUserInput from '../../../services/cleanUserInput.js'
import { ValidationError } from 'objection'

import Review from '../../../models/Review.js'
import ReviewSerializer from '../../../serializers/ReviewSerializer.js'

const boardgameReviewsRouter = new express.Router({ mergeParams: true })

boardgameReviewsRouter.post('/', async (req, res) => {
  const boardgameId = req.params.boardgameId
  const body = req.body
  const cleanBody = cleanUserInput(body)

  try {
    const newReview = await Review.query().insertAndFetch({ ...cleanBody, boardgameId})
    const serializedReview = ReviewSerializer.getSummary(newReview)
    return res.status(201).json({ review: serializedReview })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default boardgameReviewsRouter