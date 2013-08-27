var create_bigboard = function(){
    var mongo = require('mongodb');
    var mongourl = require('../server').mongourl;

    var findAllByCollection = require('../server').findAllByCollection;
    var storeBigBoardCollection = require('../server').findOrCreateByCollection;

    var Games;
    var Users;
    var Picks;

    var sucessMsg = function(results){
        console.log('stored successfully');
    }

    var saveBigBoard = function(){

        for (var g = 0; g < Games.length; g++){
            var users = {};
            for (var u = 0; u < Users.length; u++){
                pick_team_id = null;
                pick_team_name = null;
                isCorrect = null;
                for (var p = 0; p < Picks.length; p++){
                    if (Picks[p]['user_id'] == Users[u]['id'] && Picks[p]['game_id'] == Games[g]['id']){
                        pick_team_id = Picks[p]['team_id'];
                        isCorrect = Picks[p]['isCorrect'];
                        if (Games[g]['home_team_id'] == pick_team_id) {
                            pick_team_name = Games[g]['home_team']['college']
                        } else if (Games[g]['away_team_id']  == pick_team_id) {
                            pick_team_name = Games[g]['away_team']['college']
                        }
                    }
                }

                users[Users[u]['id']] = {'pick_team_id': pick_team_id, 'isCorrect': isCorrect, 'name': Users[u]['name'], 'pick_team_name': pick_team_name}
            }

            queryDoc = {'week_id': Games[g]['week_id'],
                'game': Games[g]
            }
            updateDoc = {'week_id': Games[g]['week_id'],
                'game': Games[g],
                'users': users
            }
            storeBigBoardCollection(queryDoc, updateDoc, 'bigboard', sucessMsg)
        }
    }

    var callbackPicks = function(picks){
        Picks = picks;

        saveBigBoard();
    }

    var callbackUsers = function(users){
        Users = users;

        findAllByCollection({}, 'picks', callbackPicks);
    }

    // get all users
    var callbackGames = function(games){
        Games = games;

        findAllByCollection({}, 'users', callbackUsers);
    }

    // get all games
    findAllByCollection({}, 'games', callbackGames);
}

exports.create_bigboard = create_bigboard;


