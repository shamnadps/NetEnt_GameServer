import * as util from './util'

export default function (app) {
  app.get('/casino', (req, res) => {
    // get the result array with 3 random integers
    let array = util.populateResultArray()

    // get the result of the game.
    const result = util.getGameResult(array)

    // getting a random number for determining bonus.
    const random = !util.getRandomIntInclusive()

    // sending the response as 3 element array
    res.status(200).json([
      {'values': array},
      {'bonus': random},
      {'result': result}
    ])
  })
}
