var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/pokemonController');

/* GET home page. */
router.get('/', restaurantController.viewAll);
router.get('/edit/:id', restaurantController.renderEditForm);
router.post('/edit/:id/', restaurantController.updatePokemon);
router.get('/delete/:id', restaurantController.deletePokemon);
router.get('/add', restaurantController.renderAddForm);
router.post('/add', restaurantController.addPokemon);
router.get('/request', restaurantController.renderReqForm);

module.exports = router;

