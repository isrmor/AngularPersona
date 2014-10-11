var Persona = require('./modelo/persona');
var Controller = require('./controller');

module.exports = function(app) {

	//devolver todos los Persona
	app.get('api/persona', Controller.getPersona);
	//Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	//Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	//Borrar una persona
	app.delete('/api/persona/:persona_id', Controler.removePersona);
	//Application
	//Carga única de la vista (SPA)
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html');
	});
};