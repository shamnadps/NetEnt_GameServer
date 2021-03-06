import * as util from './util'
import helmet from 'helmet'

export default function (app) {
  // Securiy
  app.use(helmet())

  // api call
  app.get('/casino', (req, res) => {
    // for CORS Support
    res.header('Access-Control-Allow-Origin', '*')

    // get the result array with 3 random integers
    let array = util.populateResultArray()

    // get the result of the game.
    const result = util.getGameResult(array)

    // getting a random number for determining bonus.
    const random = !util.getRandomIntInclusive()

    // sending the response as 3 element array
    res.status(200).json([
      {'values': array},
      {'bonus': random}, // Bonus feature, this is enabled randomly
      {'result': result}
    ])
  })
}
