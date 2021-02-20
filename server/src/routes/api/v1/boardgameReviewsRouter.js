import express from 'express' 
import { ValidationError } from 'objection'
import cleanUserInput from '../../../services/cleanUserInput.js'

import ReviewSerializer from '../../../serializers/ReviewSerializer.js'
import { BoardGame, Review } from '../../../models/index.js'

const boardgameReviewsRouter = new express.Router({ mergeParams: true })

boardgameReviewsRouter.post('/', async (req, res) => {
  const boardgameId = req.params.boardgameId
  const body = req.body
  const cleanBody = cleanUserInput(body)

  try {
    const newReview = await Review.query().insertAndFetch({ ...cleanBody, boardgameId})
    const serializedReview = ReviewSerializer.getSummary(newReview, newReview.userId)
    return res.status(201).json({ review: serializedReview })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

boardgameReviewsRouter.patch('/', async (req, res) => {
  const boardgameId = req.params.boardgameId
  const body= req.body
  const cleanBody = cleanUserInput(body)
  
  try {
    await Review.query().findById(cleanBody.id).update(cleanBody)
    const review = await Review.query().findById(cleanBody.id)
    const userId = review.userId
    const boardgame = await BoardGame.query().findById(boardgameId)
    const reviews = await boardgame.$relatedQuery('reviews')
    const serializedReviews = await Promise.all(reviews.map(review => ReviewSerializer.getSummary(review, userId)))
    return res.status(201).json({ reviews: serializedReviews })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default boardgameReviewsRouter