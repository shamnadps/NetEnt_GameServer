'use strict';

var _play = require('./api/play');

var _play2 = _interopRequireDefault(_play);

var _server = require('./server.listen');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

// api to generate random numbers, a random bonus feature and game result
(0, _play2.default)(app);

// listening on port
(0, _server2.default)(app);