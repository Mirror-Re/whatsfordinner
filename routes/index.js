var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restaurantControllers');

/* GET home page. */
router.get('/', restaurantController.viewAll);

module.exports = router;
