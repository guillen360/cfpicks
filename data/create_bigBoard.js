var mongo = require('mongodb');
var mongourl = require('../server').mongourl;
var getAllGames = require('../server').findAllByCollection;
var getAllUsers = require('../server').findAllByCollection;
var getAllPicks = require('../server').findAllByCollection;
var getBigBoard = require('../server').findAllByCollection;
var storeBigBoardCollection = require('../server').findOrCreateByCollection;

var saveBigBoard = function(game, pick, user){
    storeBigBoardCollection(
        {},
        {'game': game, 'user': user},
        'bigboard',
        null
    )
}

// get all users
var getUser = function(results){

}

// get all games
getAllGames({}, 'games', getUser);


