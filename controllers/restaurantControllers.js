const {Restaurant} = require('../models');
module.exports.viewAll = async function(req, res) {
    const restaurants = await restaurants.findAll();
    res.render('index', {restaurants});
}