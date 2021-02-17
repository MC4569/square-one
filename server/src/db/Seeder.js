import { connection } from '../boot.js'
import GenreSeeder from './seeders/GenreSeeder.js'
import BoardGameSeeder from './seeders/BoardGameSeeder.js'


class Seeder {
  static async seed() {
    console.log('seeding genres...')
    await GenreSeeder.seed()

    console.log('seeding boardgames...')
    await BoardGameSeeder.seed()

    console.log('done')
    await connection.destroy()
  }
}

export default Seeder