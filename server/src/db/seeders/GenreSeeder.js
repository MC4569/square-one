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
        name: 'Civilization'
      },
      {
        name: 'Educational'
      },
      {
        name: 'Exploration'
      },
      {
        name: 'Family Games'
      },
      {
        name: 'Fantasy'
      },
      {
        name: 'Farming'
      },
      {
        name: 'Horror'
      },
      {
        name: 'Medical'
      },
      {
        name: 'Memory'
      },
      {
        name: 'Mystery'
      },
      {
        name: 'Mythology'
      },
      {
        name: 'Nautical'
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
        name: 'Spy/Espionage'
      },
      {
        name: 'Survival'
      },
      {
        name: 'Video Game Themed'
      },
      {
        name: 'Video Game Themed'
      },
      {
        name: 'Wargame'
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