var mongo = require('mongodb');
var mongourl = require('../server').mongourl;

var findAllByCollection = require('../server').findAllByCollection;
var storeBigBoardCollection = require('../server').findOrCreateByCollection;

var Games;
var Users;
var Picks;

var printSomething = function(results){
    console.log('stored successfully');
}

var saveBigBoard = function(){

    for (var g = 0; g < Games.length; g++){
        var users = {};
        for (var u = 0; u < Users.length; u++){
            pick_team_id = null;
            isCorrect = null;
            for (var p = 0; p < Picks.length; p++){
                if (Picks[p]['user_id'] == Users[u]['id'] && Picks[p]['game_id'] == Games[g]['id']){
                    pick_team_id = Picks[p]['team_id'];
                    isCorrect = Picks[p]['isCorrect'];
                }
            }

            users[Users[u]['id']] = {'pick_team_id': pick_team_id, 'isCorrect': isCorrect, 'name': Users[u]['name']}
        }

        queryDoc = {'week_id': Games[g]['week_id'],
            'game': Games[g]
        }
        updateDoc = {'week_id': Games[g]['week_id'],
            'game': Games[g],
            'users': users
        }
        storeBigBoardCollection(queryDoc, updateDoc, 'bigboard', printSomething)
    }
}

var callbackPicks = function(results){
    Picks = results;

    saveBigBoard();
}

var callbackUsers = function(results){
    Users = results;

    findAllByCollection({}, 'picks', callbackPicks);
}

// get all users
var callbackGames = function(results){
    Games = results;

    findAllByCollection({}, 'users', callbackUsers);
}

// get all games
findAllByCollection({}, 'games', callbackGames);


