var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var tvshowSchema = new Schema({
  title:    { type: String },
  year:     { type: Number },
  country:  { type: String },
  poster:   { type: String },
  seasons:  { type: Number },
  genre:    { type: String, enum:
  ['Rock', 'Electro', 'Salsa', 'Thriller', 'Comedy']
	    },
  summary:  { type: String }
});

module.exports = mongoose.model('TVShow', tvshowSchema);