
var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({ cwd: 'app'})
.include('api')
.then('rotas')
.into(app);

module.exports = app;