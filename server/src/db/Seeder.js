import { connection } from '../boot.js'
import GenreSeeder from './seeders/GenreSeeder.js'


class Seeder {
  static async seed() {
    console.log('seeding genres...')
    await GenreSeeder.seed()

    console.log('done')
    await connection.destroy()
  }
}

export default Seeder