"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  var PORT = 1337;
  app.listen(PORT, function () {
    console.log("listening on http://localhost:" + PORT);
  });
};