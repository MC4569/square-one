// include all of your models here using CommonJS requires
const User = require("./User.js")
const Genre = require('./Genre.js')
const BoardGame = require('./BoardGame.js')
const Review = require('./Review.js')
const Vote = require('./Vote.js')

module.exports = {User, Genre, BoardGame, Review, Vote};
