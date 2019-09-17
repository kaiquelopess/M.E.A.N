var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/stackmean');

http.createServer(app).listen(3000, () => {
    console.log("Rodando na porta 3 mil kkk");
})