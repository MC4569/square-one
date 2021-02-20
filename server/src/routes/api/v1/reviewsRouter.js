import express from 'express' 
import ReviewSerializer from '../../../serializers/ReviewSerializer.js' 

import { BoardGame, Review } from '../../../models/index.js'

const reviewsRouter = new express.Router()

reviewsRouter.delete('/:id', async (req, res) => {
  const reviewId = req.params.id

  try {
    const review = await Review.query().findById(reviewId)
    const userId = review.userId
    const boardgame = await BoardGame.query().findById(review.boardgameId)
    await Review.query().deleteById(reviewId)
    const reviews = await boardgame.$relatedQuery('reviews')
    const serializedReviews = await Promise.all(reviews.map(review => {
      return ReviewSerializer.getSummary(review, userId)
    }))
    return res.status(200).json({ reviews: serializedReviews })
  } catch (error) {
    return res.status(500).json({ error: error})
  }
})

export default reviewsRouter