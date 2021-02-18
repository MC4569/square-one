import { Review, User, BoardGame } from '../../models/index.js'

class ReviewSeeder {
  static async seed() {
    const testUser = await User.query().findOne({ email: 'test3@gmail.com' })
    const testUserTwo = await User.query().findOne({ email: 'test3@gmail.com'})
    const nemesis = await BoardGame.query().findOne({ title: `Nemesis` })
    const escapeTheDarkSector = await BoardGame.query().findOne({ title: 'Escape The Dark Sector' })
    const diceThrone = await BoardGame.query().findOne({ title: 'Dice Throne' })
    const reviewsData = [
      {
        rating: 4,
        title: 'Really fun, But also really hard',
        content: 'This game is a lot of fun, but its kind of hard to pick up and play. The game also has a lot of mechanics that are tough to get down.',
        userId: testUser.id,
        boardgameId: nemesis.id
      },
      {
        rating: 5,
        title: 'Love, love, love this game!',
        content: 'This game is so much fun and offers a lot of different options for cooperation to get through the campaign',
        userId: testUserTwo.id,
        boardgameId: escapeTheDarkSector.id
      },
      {
        rating: 5,
        title: 'Blends so many styles into one great game!',
        content: 'This game is a lot of fun, but its kind of hard to pick up and play. The game also has a lot of mechanics that are tough to get down.',
        userId: testUser.id,
        boardgameId: diceThrone.id
      }
    ]

    for (const singleReviewData of reviewsData) {
      const currentReview = await Review.query().findOne(singleReviewData)

      if (!currentReview) {
        await Review.query().insert(singleReviewData)
      }
    }
  }
}

export default ReviewSeeder