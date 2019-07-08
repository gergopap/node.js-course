const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.get('/', function (req, res) {
});

const server = app.listen(3000, function () {
});
