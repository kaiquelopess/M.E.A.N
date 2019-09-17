module.exports = function(app) { 


    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');
    var api = {};
    var model = mongoose.model('Usuario');
    
    api.autentica = function(req, res) {
    
        model
        .findOne({login: req.body.login, senha: req.body.senha})
        .then(function(usuario) {
            if (!usuario) {
                console.log('Usuario e Senha inválidos');
                res.sendStatus(401);
            } else {
                var token =  jwt.sign({login: usuario.login},  app.get('secret'), {expiresIn: 84600});
            }

        }, function(error) {
            console.log('Usuario e Senha inválidos');
                res.sendStatus(401);
        })
        };
    
    api.verificaToken = function() {
    
    };

}
