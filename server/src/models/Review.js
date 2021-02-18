const Model = require('./Model.js') 

class Review extends Model {
  static get tableName() {
    return 'reviews'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['rating'],
      properties: {
        rating: {
          type: ['integer', 'string'],
          minimum: 1,
          maximum: 5
        },
        title: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        content: {
          type: 'string',
          minLength: 1,
          maxLength: 1000
        }
      }
    }
  }

  static get relationMappings() {
    const { User, BoardGame } = require('./index.js')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'reviews.userId',
          to: 'users.id'
        }
      },
      boardgame: {
        relation: Model.BelongsToOneRelation,
        modelClass: BoardGame,
        join: {
          from: 'reviews.boardgameId',
          to: 'boardgames.id'
        }
      }
    }
  }
}

module.exports = Review