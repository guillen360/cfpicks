var mongo = require('mongodb');
var mongourl = require('../server').mongourl;
var updatePicksCollection = require('../server').findOrCreateByCollection;
var getAllPicks = require('../server').findAllByCollection;

var updatePicks = function(game, pick){
    if (game['spread_winning_team_id'] != null){

        // ****** update pick with game info *******
        pickQueryDoc = {
            "user_id": pick['user_id'],
            "game_id": pick['game_id'],
            "team_id": pick['team_id']
        }

        if (pick['team_id'] == game['spread_winning_team_id']){
            isCorrectHold = true;
        } else {
            isCorrectHold = false;
        }

        pickUpdateDoc = {
            "user_id": pick['user_id'],
            "game_id": pick['game_id'],
            "team_id": pick['team_id'],
            "isCorrect": isCorrectHold
        }
        updatePicksCollection(pickQueryDoc, pickUpdateDoc, 'picks', function(results){console.log('update!')})
        console.log('result logged');
    } else {
        console.log('no result logged in yet');
    }
};

var getGameResult = function(searchDoc, pick, callbackFunc) {
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;
        // ++++++++++++++++
        var collection = db.collection('games');
        collection.findOne(searchDoc, function(err, result) {
                if (err) throw err;
                // ++++++++++++++++
                // Let's close the db
                if (callbackFunc){
                    callbackFunc(result, pick);
                }
//                db.close();
            }
        );
    });
};

var getGame = function(resultsAllPicks){
    for (var i = 0; i < resultsAllPicks.length; i++){
        getGameResult({"id": resultsAllPicks[i]['game_id']}, resultsAllPicks[i], updatePicks)
    }
}

getAllPicks({}, 'picks', getGame);

