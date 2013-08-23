exports.base = function(req, res){
    // renders with partial of 'index' by default...
    res.render('base');
};


// partials:
exports.index = function (req, res) {
    res.render('partials/index');
}

exports.bigboard = function (req, res) {
    mongourl = require('../server').mongourl;
    mongo = require('mongodb');
    var bigBoardCollection = require('../server').findAllByCollection;
    var getActiveWeek = require('../server').findOneByCollection;

    var sendBigBoard = function(results){
        res.render('partials/bigboard', results);
    }

    var getBigBoard = function(result){
        bigBoardCollection({'week_id': result['id']}, 'bigboard', sendBigBoard);
    }
    if (req.body.week_id){
        getBigBoard({'id': req.body.week_id})
    } else {
        getActiveWeek({"active": true}, 'weeks', getBigBoard)
    }

}

exports.mypicks = function (req, res) {
    mongourl = require('../server').mongourl;
    mongo = require('mongodb');
    $ = require('jquery');

    var games = {'games': []};
    var results = {};
    var ix_ctr = 0;

    function connect(callback){
        mongo.MongoClient.connect(mongourl, function(err, db) {
            if(err) throw err;

            var weeksCollection = db.collection('weeks');
            weeksCollection.find().toArray(function(err, weeksResults) {
                if (err) throw err;

                for (week in weeksResults){
                    results[weeksResults[week]['id']] = weeksResults[week];
                    
                    if (weeksResults[week]['active']){
                        var gamesCollection = db.collection('games');
                        gamesCollection.find({'week_id': weeksResults[week]['id']}).toArray(function(err, gameResults) {
                            if (err) throw err;

                            games['games'] = gameResults;

                            for (var i = 0; i < gameResults.length; i++){
                                var picksCollection = db.collection('picks');
                                var t_game_id = gameResults[i].id;
                                var inner_ctr = 0;

                                games['games'][i]['pick_team_id'] = "";
                                games['games'][i]['isCorrect'] = null;
                                picksCollection.findOne({"user_id": req.user.id, "game_id": t_game_id}, function(err, picksResults) {
                                    var r;
                                    if (!picksResults){
                                        x = null;
                                    } 
                                    else {
                                        r = {
                                            "pick_team_id": picksResults.team_id,
                                            "isCorrect": picksResults.isCorrect
                                        }
                                        for (var x = 0; x < gameResults.length; x++){
                                            if (gameResults[x].id == picksResults.game_id){
                                                break;
                                            }
                                        }
                                    }
                                    build_data(r, gameResults.length, x, callback); // i will be upper limit when this hits
                                });
                            }
                        });
                    }
                }
            });
        });
    }

    connect(function(){
        res.render('partials/mypicks', {'weeks':results, 'games':games['games']});
    });

    var build_data = function(p, nbr_games, x, callback){
        ix_ctr += 1;
        if (x != null){
            games['games'][x]["pick_team_id"] = p["pick_team_id"];
            games['games'][x]["isCorrect"] = p["isCorrect"];
        }
        if (nbr_games == ix_ctr){
            callback(results);
        }
    }
}

exports.updateMyPicks = function (req, res){
    var updatePick = require('../server').findOrCreateByCollection;

    sendResp = function(results){
        if (results){
            res.json(results);
        } else {
            res.json(500, {"error_message": ["an error occurred saving user pick"]});
        }
    }

    queryDoc = {};
    updateDoc = {};

    // build query doc:
    queryDoc["user_id"] = req.user.id;
    queryDoc["game_id"] = req.body.game_id;
    // build updatedoc by adding the team_id (user can go back and forth on pick):
    updateDoc["user_id"] = req.user.id;
    updateDoc["game_id"] = req.body.game_id;
    updateDoc["team_id"] = req.body.team_id;
    updateDoc["isCorrect"] = null;

//    updatePick(queryDoc, updateDoc, "picks", sendResp);
    updatePick(queryDoc, updateDoc, "picks", null);
    res.json(updateDoc);
}

exports.contact = function (req, res) {
    res.render('partials/contact');
}

exports.finishedpicks = function(req, res){
    mongourl = require('../server').mongourl;
    mongo = require('mongodb');
    $ = require('jquery');

    var week = req.query.week;
    var user = req.user.id;
    var ix_ctr = 0;

    var games = {'games': []};

    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;
        var gamesCollection = db.collection('games');
        gamesCollection.find({'week_id': week}).toArray(function(err, gameResults) {
            if (err) throw err;

            if (gameResults.length <= 0){
                res.render('partials/finishedpicks');
            }
            games['games'] = gameResults;

            for (var i = 0; i < gameResults.length; i++){
                var picksCollection = db.collection('picks');
                var t_game_id = gameResults[i].id;
                var inner_ctr = 0;

                games['games'][i]['pick_team_id'] = "";
                games['games'][i]['isCorrect'] = null;
                picksCollection.findOne({"user_id": req.user.id, "game_id": t_game_id}, function(err, picksResults) {
                    var r;
                    if (!picksResults){
                        x = null;
                    } 
                    else {
                        r = {
                            "pick_team_id": picksResults.team_id,
                            "isCorrect": picksResults.isCorrect
                        }
                        for (var x = 0; x < gameResults.length; x++){
                            if (gameResults[x].id == picksResults.game_id){
                                break;
                            }
                        }
                    }
                    build_data(r, gameResults.length, x, function(){
                        res.render('partials/finishedpicks', {'games':games['games']});
                    });
                });
            }
        });
    });

    var build_data = function(p, nbr_games, x, callback){
        ix_ctr += 1;
        if (x != null){
            games['games'][x]["pick_team_id"] = p["pick_team_id"];
            games['games'][x]["isCorrect"] = p["isCorrect"];
        }
        if (nbr_games == ix_ctr){
            callback();
        }
    }

}







