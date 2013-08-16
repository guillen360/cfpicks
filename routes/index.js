exports.base = function(req, res){
    // renders with partial of 'index' by default...
    res.render('base');
};


// partials:
exports.index = function (req, res) {
    res.render('partials/index');
}

exports.bigboard = function (req, res) {

    res.render('partials/bigboard');
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

                            console.log('here');
                            for (var i = 0; i < gameResults.length; i++){
                                var picksCollection = db.collection('picks');
                                var t_game_id = gameResults[i].id;
                                var inner_ctr = 0;
                                picksCollection.findOne({"user_id": req.user.id, "game_id": t_game_id}, function(err, picksResults) {
                                    var r;
                                    if (!picksResults){ 
                                        r = {
                                            "pick_team_id": "",
                                            "isCorrect": null
                                        }
                                    } 
                                    else {
                                        r = {
                                            "pick_team_id": picksResults.team_id,
                                            "isCorrect": picksResults.isCorrect
                                        }
                                    }
                                    build_data(gameResults[inner_ctr++], r, i, callback); // i will be upper limit when this hits
                                    // games['games'][ix_ctr++] = r;
                                });
                            }
                        });
                    }
                }
                // callback(results);
            });
        });
    }

    connect(function(){
        res.render('partials/mypicks', {'weeks':results, 'games':games['games']});
    });

    var build_data = function(g, p, nbr_games, callback){
        games['games'][ix_ctr++] = $.extend(g, p);
        if (nbr_games == ix_ctr){
            callback(results);
           // res.render('partials/mypicks', games);

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

    updatePick(queryDoc, updateDoc, "picks", sendResp);
}

exports.contact = function (req, res) {
    res.render('partials/contact');
}

