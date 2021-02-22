import { Genre } from '../../models/index.js'

class GenreSeeder {
  static async seed() {
    const genresData = [
      {
        name: 'Adventure'
      },
      {
        name: 'City Building'
      },
      {
        name: 'Educational'
      },
      {
        name: 'Fantasy'
      },
      {
        name: 'Horror'
      },
      {
        name: 'Memory'
      },
      {
        name: 'Mystery'
      },
      {
        name: 'Puzzle'
      },
      {
        name: 'Party Games'
      },
      {
        name: 'Role Playing'
      },
      {
        name: 'Science Fiction'
      },
      {
        name: 'Video Game Themed'
      },
    ]

    for (const singleGenreData of genresData) {
      const currentGenre = await Genre.query().findOne(singleGenreData)

      if (!currentGenre) {
        await Genre.query().insert(singleGenreData)
      }
    }
  }
}

export default GenreSeeder