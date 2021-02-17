import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router' 

const BoardGameShowPage = ({user}) => {
  const [boardgame, setBoardgame] = useState({})

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
      </div>
    </div>
  )
}

export default BoardGameShowPage