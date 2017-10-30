const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts

var TVShowCtrl = require('./../../controllers/lista');


router.route('/listas')
  .get(TVShowCtrl.findAll)
  .post(TVShowCtrl.addLista);

router.route('/listas/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateLista)
  .delete(TVShowCtrl.deleteLista);

//app.use('/api', tvshows);

module.exports = router;
