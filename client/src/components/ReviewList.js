import React from 'react' 

import ReviewTile from './ReviewTile'

const ReviewList = ({ reviews, user, patchReview, reviewDelete, errors, addVote }) => {
  const reviewTiles = reviews.map(review => {
    return (
      <ReviewTile
        key={review.id}
        review={review} 
        patchReview={patchReview}
        reviewDelete={reviewDelete}
        user={user}
        errors={errors}
        addVote={addVote}
      />
    )
  })

  return (
    <div className='callout review-list-container'>
      <h3>Reviews</h3>
      {reviewTiles}
    </div>
  )
}

export default ReviewList