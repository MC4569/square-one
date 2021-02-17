

class BoardGameSerializer {
  static async getDetails(boardgame, currentUserId) {
    const allowedAttributes = ['id', 'title', 'brandName', 'description', 'genreId']
    const serializedBoardgame = {}

    for (const attribute of allowedAttributes) {
      serializedBoardgame[attribute] = boardgame[attribute]
    }
    return serializedBoardgame
  }
}

export default BoardGameSerializer