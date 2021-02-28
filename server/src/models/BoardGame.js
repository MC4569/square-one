const Model = require('./Model.js')

class BoardGame extends Model {
  static get tableName() {
    return 'boardgames'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'brandName', 'developer', 'description'],
      properties: {
        title: {type: 'string'},
        brandName: {type: 'string'},
        developer: {type: 'string'},
        description: {type: 'string'}
      }
    }
  }

  static get relationMappings() {
    const {Genre, Review} = require('./index.js')

    return {
      genre: {
        relation: Model.BelongsToOneRelation,
        modelClass: Genre,
        join: {
          from: 'boardgames.genreId',
          to: 'genres.id'
        }
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'boardgames.id',
          to: 'reviews.boardgameId'
        }
      }
    }
  }
}

module.exports = BoardGame