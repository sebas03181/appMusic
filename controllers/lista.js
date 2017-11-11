//File: controllers/listas.js
var mongoose = require('mongoose');
var DataBase  = mongoose.model('Lista');

//GET - Return all listas in the DB
exports.findAll = function(req, res) {
	DataBase.find(function(err, listas) {
    if(err) res.send(500, err.message);

    console.log('GET /listas')
		res.status(200).jsonp(listas);
	});
};

//GET - Return a DataBase with specified ID
exports.findById = function(req, res) {
	DataBase.findById(req.params.id, function(err, listas) {
    if(err) return res.send(500, err.message);

    console.log('GET /listas/' + req.params.id);
		res.status(200).jsonp(listas);
	});
};

//POST - Insert a new DataBase in the DB
exports.addLista = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var listas = new DataBase({
		title:    req.body.title,
		year: 	  req.body.year,
		country:  req.body.country,
		poster:   req.body.poster,
		seasons:  req.body.seasons,
		genre:    req.body.genre,
		summary:  req.body.summary,
		songs:  req.body.songs
	});

	listas.save(function(err, listas) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(listas);
	});
};

//PUT - Update a register already exists
exports.updateLista = function(req, res) {
	DataBase.findById(req.params.id, function(err, listas) {
		listas.title   = req.body.petId;
		listas.year    = req.body.year;
		listas.country = req.body.country;
		listas.poster  = req.body.poster;
		listas.seasons = req.body.seasons;
		listas.genre   = req.body.genre;
		listas.summary = req.body.summary;

		listas.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(listas);
		});
	});
};

//DELETE - Delete a DataBase with specified ID
exports.deleteLista = function(req, res) {
	DataBase.findById(req.params.id, function(err, listas) {
		listas.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send('Delete complete');
		})
	});
};