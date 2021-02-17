import React, { useState, useEffect } from 'react'

import GenreTile from './GenreTile.js'

const GenreIndexPage = props => {
  const [genres, setGenres] = useState([])

  const getGenres = async () => {
    try {
      const response = await fetch('/api/v1/genres')

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }

      const body = await response.json()
      setGenres(body.genres)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  const genreTiles = genres.map(genreObject => {
    return (
      <GenreTile
        key={ genreObject.id }
        genre={ genreObject } 
      />
    )
  })

  return (
    <div className="grid-container text-center" id='genre'>
      <h1>Square One</h1>
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
        {genreTiles}
      </div>
    </div>
  )
}

export default GenreIndexPage