import React, { useState, useEffect } from 'react' 

import ReviewTile from './ReviewTile'

const ReviewList = ({reviews, user, errors}) => {
  const reviewTiles = reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        review={review} 
        user={user}
        errors={errors}
      />
    )
  })

  return (
    <div className='callout'>
      <h3>Reviews</h3>
      {reviewTiles}
    </div>
  )
}

export default ReviewList