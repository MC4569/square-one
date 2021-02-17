const Model = require('./Model.js')

class BoardGame extends Model {
  static get tableName() {
    return 'boardgames'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'brandName', 'description'],
      properties: {
        title: {type: 'string'},
        brandName: {type: 'string'},
        description: {type: 'string'}
      }
    }
  }

  static get relationMappings() {
    const {Genre} = require('./index.js')

    return {
      genre: {
        relation: Model.BelongsToOneRelation,
        modelClass: Genre,
        join: {
          from: 'boardgames.genreId',
          to: 'genres.id'
        }
      }
    }
  }
}

module.exports = BoardGame