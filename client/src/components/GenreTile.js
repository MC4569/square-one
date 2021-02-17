import React from 'react'
import { Link } from 'react-router-dom'

const GenreTile = ({ genre }) => {
  return (
    <div className="cell">
      <Link to={`/genres/${genre.id}`}>
        <div className="card" id='genre-card'>
          <div className="card-section">
            <h4>
              { genre.name }
            </h4>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GenreTile