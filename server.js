//Inicialización

//Usamos Express
var express = require('express');
var app = express();
//Usamos Mongoose para MongoDB
var mongoose = require('mongoose');
//Usamos puerto 8080
var port = process.env.PORT || 8080;

//Configuración
//Hacemos la conexión a la base de datos Mongo con nombre "PersonasExample"
mongoose.connect('mongodb://localhost:27017/PersonasExample');

app.configure(function() {
	app.use(express.static(__dirname + '/angular'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

//Cargamos los endpoints
require('./app/routes.js')(app);

//Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto "+ port);