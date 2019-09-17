module.exports = function (uri) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function () {
        console.log('Conectado ao MONGO DB');
    });

    mongoose.connection.on('error', function (erro) {
        console.log('Erro na conexão com o banco:' + erro);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Desconetado do MONGO DB');
    });

    process.on('SIGINT', function () {

        mongoose.connection.close(function () {
            console.log('Conexão fechada pelo término da aplicação');
            process.exit(0);
        })
    });

}