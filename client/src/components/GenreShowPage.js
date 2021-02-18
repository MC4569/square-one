import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'

import BoardGameTile from './BoardGameTile.js'

const GenreShowPage = props => {
  const [genre, setGenre] = useState({
    id: "",
    name: "",
    boardgames: []
  })

  const genreId = props.match.params.id

  const getGenre = async () => {
    try {
      const response = await fetch(`/api/v1/genres/${genreId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const body = await response.json()
      setGenre(body.genre)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getGenre()
  }, [])

  const boardGameTiles = genre.boardgames.map((boardgame) => {
    return (
      <BoardGameTile
        key={boardgame.id}
        boardgame={boardgame} 
      />
    )
  })

  return (
    <div className='grid-container text-center' id='genre-show'>
      <div className='showpage-content'>
        <h1>{genre.name}</h1>
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          {boardGameTiles}
        </div>
        <div className="grid-x grid-margin-x">
          <div className="small-4 small-offset-4" id="new-boardgame-form-card">
            <Link to={`/genres/${genreId}/boardgames/new`}>
              <div className="new-boardgame-link-content">
                <h4>Don't see the game you're looking for?</h4>
                <p>Submit a request to add a new game here!</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenreShowPage