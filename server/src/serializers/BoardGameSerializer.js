import ReviewSerializer from './ReviewSerializer.js'
class BoardGameSerializer {
  static async getDetails(boardgame, currentUserId) {
    const allowedAttributes = ['id', 'title', 'brandName', 'description', 'genreId']
    const serializedBoardgame = {}

    for (const attribute of allowedAttributes) {
      serializedBoardgame[attribute] = boardgame[attribute]
    }

    serializedBoardgame.reviews = await boardgame.$relatedQuery('reviews')
    serializedBoardgame.reviews = await Promise.all(serializedBoardgame.reviews.map(review => {
      return ReviewSerializer.getDetails(review, currentUserId)
    }))
    return serializedBoardgame
  }
}

export default BoardGameSerializer