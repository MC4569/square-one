import {BoardGame, Genre } from '../../models//index.js'

class BoardGameSeeder {
  static async seed() {
    const adventure = await Genre.query().findOne({ name: 'Adventure' })
    const cityBuilding = await Genre.query().findOne({ name: 'City Building' })
    const horror = await Genre.query().findOne({ name: 'Horror' })
    const scienceFiction = await Genre.query().findOne({ name: 'Science Fiction' })
    const rpg = await Genre.query().findOne({ name: 'Role Playing' })

    const boardgamesData = [
      {
        title: "Dice Throne",
        brandName: "Roxley Games",
        developer: "Gavan Brown, Manny Trembley",
        description: "A heart-pumping, fast-playing game of skilled card play and dice manipulation. The game is played over a series of rounds where you will be rolling your hero's dice up to 3 times. You will use the combination of dice symbols or numbers to activate your hero's abilities to attack your opponent(s).",
        genreId: adventure.id
      },
      {
        title: "Underwater Cities",
        brandName: "Delicious Games",
        description: "In Underwater Cities, which takes about 30-45 minutes per player, players represent the most powerful brains in the world, brains nominated due to the overpopulation of Earth to establish the best and most livable underwater areas possible.",
        genreId: cityBuilding.id
      },
      {
        title: "Nemesis",
        brandName: "Awaken Realms",
        description: "Nemesis is a semi-cooperative game in which you and your crewmates must survive on a ship infested with hostile organisms. To win the game, you have to complete one of the two objectives dealt to you at the start of the game and get back to Earth in one piece. You will find many obstacles on your way: swarms of Intruders (the name given to the alien organisms by the ship AI), the poor physical condition of the ship, agendas held by your fellow players, and sometimes just cruel fate.",
        genreId: horror.id
      },
      {
        title: "Twilight Imperium: Fourth Edition ",
        brandName: "Fantasy Flight Games",
        description: "Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.",
        genreId: scienceFiction.id
      },
      {
        title: "Dungeons & Dragons: Castle Ravenloft Board Game ",
        brandName: "Wizards of the Coast",
        description: "Castle Ravenloft Boardgame by Bill Slavicsek, Mike Mearls and Peter Lee The master of Ravenloft is having guests for dinner – and you are invited! Evil lurks in the towers and dungeons of Castle Ravenloft, and only heroes of exceptional bravery can survive the horrors within. Designed for 1-5 players, this boardgame features multiple scenarios, challenging quests, and cooperative gameplay",
        genreId: rpg.id
      },
    ]

    for (const singleBoardGameData of boardgamesData) {
      const currentBoardGame = await BoardGame.query().findOne(singleBoardGameData)

      if (!currentBoardGame) {
        await BoardGame.query().insert(singleBoardGameData)
      }
    }
  }
}

export default BoardGameSeeder