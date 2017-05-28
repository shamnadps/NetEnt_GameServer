'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  // Securiy
  app.use((0, _helmet2.default)());

  // api call
  app.get('/casino', function (req, res) {
    // for CORS Support
    res.header('Access-Control-Allow-Origin', '*');

    // get the result array with 3 random integers
    var array = util.populateResultArray();

    // get the result of the game.
    var result = util.getGameResult(array);

    // getting a random number for determining bonus.
    var random = !util.getRandomIntInclusive();

    // sending the response as 3 element array
    res.status(200).json([{ 'values': array }, { 'bonus': random }, // Bonus feature, this is enabled randomly
    { 'result': result }]);
  });
};

var _util = require('./util');

var util = _interopRequireWildcard(_util);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }