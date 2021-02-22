import React, { useState } from 'react' 
import { Redirect } from 'react-router-dom' 
import { useParams } from 'react-router' 

import ErrorList from './ErrorList.js'
import translateServerErrors from '../services/translateServerErrors' 

const NewBoardGameForm = props => {
  const [newBoardGame, setNewBoardGame] = useState ({
    title: '',
    brandName: '',
    description: ''
  })

  const { genreId } = useParams()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    setNewBoardGame({
      ...newBoardGame,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const addBoardGame = async (newBoardGame) => {
    try {
      const response = await fetch(`/api/v1/genres/${genreId}/boardgames`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify(newBoardGame)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage=`${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
      } else {
        const body = await response.json()
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const clearForm = () => {
    setNewBoardGame({
      title: '',
      brandName: '',
      description: ''
    })
    setErrors({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addBoardGame(newBoardGame)
    if (shouldRedirect === true) {
      clearForm()
    }
  }

  if (shouldRedirect) {
    return <Redirect to={`/genres/${genreId}`}/>
  }

  return (
    <>
      <h1>Submit a new game for approval here!</h1>
      <form onSubmit={handleSubmit} className='new-boardgame-form'>
        <ErrorList errors={errors} />

        <label>
          Title:
          <input
            type='text'
            name='title'
            onChange={handleInputChange}
            value={newBoardGame.title}
          />
        </label>

        <label>
          Publisher:
          <input
            type='text'
            name='brandName'
            onChange={handleInputChange}
            value={newBoardGame.brandName} 
          />
        </label>

        <label>
          Game Description:
          <textarea
            type='text'
            name='description'
            onChange={handleInputChange}
            value={newBoardGame.description} 
          />
        </label>

        <div className='button-group'>
          <input className="button" type="submit" value="Submit"/>
        </div>
      </form>
    </>
  )
}

export default NewBoardGameForm