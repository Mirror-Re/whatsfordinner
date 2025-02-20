const {Pokemon} = require('../models');
const types =  ['Electric', 'Bug', 'Fire', 'Dark', 'Fairy', 'Dragon', 'Fighting', 'Ghost', 'Flying'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports.viewAll = async function(req, res) {
    let searchTypes = ['All'];
    for(let i = 0; i<types.length; i++){
        searchTypes.push(types[i]);
    }
    let searchType = req.query.category || 'All';
    let searchRandom = req.query.random || false; //changed
    if (searchType==='All'){
        pokemon = await Pokemon.findAll();
    } else {
        pokemon = await Pokemon.findAll({
            where: {
                        category: searchType
                   }
        });
    }
    if (pokemon.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(pokemon.length);
        pokemon = [pokemon[randomIndex]];
    }
    res.render('index', {pokemon, types:searchTypes, searchType, searchRandom});//changed
}

module.exports.renderEditForm = async function(req, res) {
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon, types});
}

module.exports.updateRestaurant = async function(req, res) {
    await pokemon.update(
        {
            name: req.body.name,
            type: req.body.type,
            image: req.body.image,
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
    await Pokemon.destroy(
    {
        where:
        {
            id: req.params.id
        }
    });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res) {
    const pokemon = {
        name: "",
        image: "",
        type: types[0],
    };
    res.render('add', {pokemon, types});
}

module.exports.addRestaurant = async function(req, res) {
    await Pokemon.create(
        {
            name: req.body.name,
            type: req.body.type,
            image: req.body.image
        });
    res.redirect('/');
}