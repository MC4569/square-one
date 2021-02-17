const Model = require('./Model.js')

class Genre extends Model {
  static get tableName() {
    return 'genres'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      }
    }
  }

  static get relationMappings() {
    const BoardGame = require('./BoardGame.js')

    return {
      boardgames: {
        relation: Model.HasManyRelation,
        modelClass: BoardGame,
        join: {
          from: 'genres.id',
          to: 'boardgames.genreId'
        }
      }
    }
  }
}

module.exports = Genre