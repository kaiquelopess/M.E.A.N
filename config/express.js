
var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', 'homemavestruz');
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({ cwd: 'app'})
.include('models')
.then('api')
.then('rotas/auth.js')
.then('rotas')
.into(app);

module.exports = app;