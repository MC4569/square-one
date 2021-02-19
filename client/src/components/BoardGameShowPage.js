import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router'
import translateServerErrors from '../services/translateServerErrors.js'

import NewReviewForm from './NewReviewForm.js'
import ReviewList from './ReviewList.js'

const BoardGameShowPage = ({user}) => {
  const [boardgame, setBoardgame] = useState({})
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState({})
  const { id } = useParams()

  const getBoardGame = async () => {
    try {
      const response = await fetch(`/api/v1/boardgames/${id}?userId=${user.id}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setBoardgame(body.boardgame)
    } catch (error) {
      console.error(error)
      console.error( `Error in fetch ${error.message}`)
    }
  }

  const addReview = async (review) => {
    try {
      const response = await fetch(`/api/v1/boardgames/${id}/reviews`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({ ...review, userId: user.id })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const errors = translateServerErrors(body.errors)
          setErrors(errors)
          return false
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
      } else {
        const body = await response.json()
        setReviews(
          [...reviews,
          body.review]
        )
        setErrors({})
        return true
      }
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  useEffect(() => {
    getBoardGame
  }, [])

  return (
    <div className="boardgame-show">
      <div className="grid-container">
        <div className="text-center">
          <h2>{boardgame.title} {boardgame.brandName}</h2>
          <p>{boardgame.description}</p>
        </div>

        <NewReviewForm
          addReview={addReview}
          errors={errors} 
        />

        <ReviewList
          reviews={reviews} 
        />
      </div>
    </div>
  )
}

export default BoardGameShowPage