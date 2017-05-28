import playApi from './api/play'
import listen from './server.listen'

let express = require('express')
let app = express()

// api to generate random numbers, a random bonus feature and game result
playApi(app)

// listening on port
listen(app)
