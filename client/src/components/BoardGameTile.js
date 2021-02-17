import React from 'react' 
import { Link } from 'react-router-dom'

const BoardGameTile = ({boardgame}) => {
  return (
    <div className="cell">
      <div className="card" id='boardgame-card'>
        <div className="card-section">
          <Link to={`/boardgames/${boardgame.id}`}>
            <h4>{boardgame.title}, {boardgame.brandName}</h4>
            <p>{boardgame.description}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BoardGameTile