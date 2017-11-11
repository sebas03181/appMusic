
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var song = new Schema({
  id: { type: String },
  nombre: { type: String },
  song: { type: String },
  image: { type: String }
});

var tvshowSchema = new Schema({
  id: { type: String },
  title: { type: String },
  poster: { type: String },
  genre: {
    type: String, enum:
    ['Rock', 'Electro', 'Salsa', 'Vallenato', 'Trap', 'Ranchera', 'Pop']
  },
  summary: { type: String },
  songs: [new Schema({
    id: { type: String },
    nombre: { type: String },
    song: { type: String },
    image: { type: String },
    valor: { type: Boolean }
  }, { strict: false })
  ]
}, { strict: false });

module.exports = mongoose.model('Lista', tvshowSchema);