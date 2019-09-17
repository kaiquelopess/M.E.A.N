module.exports = (app) => { 

var api = app.api.foto;
app.route('/v1/fotos')
.get(api.Lista)
.post(api.adiciona);


app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);

};