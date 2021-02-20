import React from 'react' 

import ReviewTile from './ReviewTile'

const ReviewList = ({ reviews, user, patchReview, reviewDelete, errors }) => {
  const reviewTiles = reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        review={review} 
        patchReview={patchReview}
        reviewDelete={reviewDelete}
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