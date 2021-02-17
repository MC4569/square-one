
class GenreSerializer {
  static getSummary(genre) {
    const allowedAttributes = ['id', 'name']
    const serializedGenre = {}

    for (const attribute of allowedAttributes) {
      serializedGenre[attribute] = genre[attribute]
    }
    return serializedGenre
  }

  static async getDetails(genre) {
    const serializedGenre = this.getSummary(genre)
    serializedGenre.boardgames = await genre.$relatedQuery('boardgames')
    return serializedGenre
  }
}

export default GenreSerializer