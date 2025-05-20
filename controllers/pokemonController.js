const {Pokemon, Pokerequests} = require('../models');
const types =  ['⚡', '🐛', '🔥', '👻', '🧚‍♀️', '🐲', '🥊', '🌑', '🪽', '🌟', '💧'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports.viewAll = async function(req, res) {
    let searchTypes = ['All'];
    for(let i = 0; i<types.length; i++){
        searchTypes.push(types[i]);
    }
    let searchType = req.query.type || 'All';
    let searchRandom = req.query.random || false; //changed
    if (searchType==='All'){
        pokemon = await Pokemon.findAll();
    } else {
        pokemon = await Pokemon.findAll({
            where: {
                type: searchType
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

module.exports.updatePokemon = async function(req, res) {
    await Pokemon.update(
        {
            name: req.body.name,
            type: req.body.type,
            retreat: req.body.retreat,
            image: req.body.image,
            attackname: req.body.attackname,
            attackcost: req.body.attackcost,
            attackdamage: req.body.attackdamage,
            attackname2: req.body.attackname2,
            attackcost2: req.body.attackcost2,
            attackdamage2: req.body.attackdamage2,
            hitpoints: req.body.hitpoints,
            resistance: req.body.resistance,
            stage: req.body.stage,
            weakness: req.body.weakness

        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/')
}

module.exports.deletePokemon = async function(req, res) {
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
        type: "",
        retreat: "",
        image: "",
        attackname: "",
        attackcost: "",
        attackdamage: "",
        attackname2: "",
        attackcost2: "",
        attackdamage2: "",
        hitpoints: "",
        resistance: "",
        stage: "",
        weakness: ""
    };
    res.render('add', {pokemon, types});
}

module.exports.renderReqForm = function(req, res) {
    const pokerequests = {
        username: "",
        reqPokemonName: "",
        message: ""
    };
    res.render('request', {pokerequests});
}

module.exports.addPokemon = async function(req, res) {
    await Pokemon.create(
        {
            name: req.body.name,
            type: req.body.type,
            retreat: req.body.retreat,
            image: req.body.image,
            attackname: req.body.attackname,
            attackcost: req.body.attackcost,
            attackdamage: req.body.attackdamage,
            attackname2: req.body.attackname2,
            attackcost2: req.body.attackcost2,
            attackdamage2: req.body.attackdamage2,
            hitpoints: req.body.hitpoints,
            resistance: req.body.resistance,
            stage: req.body.stage,
            weakness: req.body.weakness
        });
    res.redirect('/');
}