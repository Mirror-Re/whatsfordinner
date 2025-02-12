const {Restaurant} = require('../models');
const categories =  ['Italian', 'Pizza', 'Chinese', 'Mexican', 'Burgers', 'Fine Dining', ' Food Truck', 'Cafe', 'Bakery'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports.viewAll = async function(req, res) {
    let searchCategories = ['All'];
    for(let i = 0; i<categories.length; i++){
        searchCategories.push(categories[i]);
    }
    let searchCategory = req.query.category || 'All';
    let searchRandom = req.query.random || false; //changed
    if (searchCategory==='All'){
        restaurants = await Restaurant.findAll();
    } else {
        restaurants = await Restaurant.findAll({
            where: {
                        category: searchCategory
                   }
        });
    }
    if (restaurants.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(restaurants.length);
        restaurants = [restaurants[randomIndex]];
    }
    res.render('index', {restaurants, categories:searchCategories, searchCategory, searchRandom});//changed
}

module.exports.renderEditForm = async function(req, res) {
    const restaurant = await Restaurant.findByPk(
        req.params.id
    );
    res.render('edit', {restaurant, categories});
}

module.exports.updateRestaurant = async function(req, res) {
    await Restaurant.update(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/')
}

module.exports.deleteRestaurant = async function(req, res) {
    await Restaurant.destroy(
    {
        where:
        {
            id: req.params.id
        }
    });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res) {
    const restaurant = {
        name: "",
        description: "",
        rating: 1,
        image: "",
        category: categories[0],
    };
    res.render('add', {restaurant, categories});
}

module.exports.addRestaurant = async function(req, res) {
    await Restaurant.create(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        });
    res.redirect('/');
}