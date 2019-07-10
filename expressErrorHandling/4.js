const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
  setTimeout(function () {
    try {
      throw new Error('BROKEN');
    } catch (err) {
      next(err);
    }
  }, 100);
});

app.listen(3000, function () { });
