exports.base = function(req, res){
    // renders with partial of 'index' by default...
    res.render('base');
};


// partials:
exports.index = function (req, res) {
    res.render('partials/index');
}

exports.bigboard = function (req, res) {
    req.params.collection = 'picks';

    results = mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        var collection = db.collection(req.params.collection);
        collection.find(req.query).toArray(function(err, results) {
            if (err)
            {
                db.close();
                return { "message": "error has occurred"};
            }

            db.close();

            return results;
        });
    });

    console.log(results);
    res.render('partials/bigboard');
}

exports.mypicks = function (req, res) {
    mongourl = require('../server').mongourl;
    mongo = require('mongodb');
    $ = require('jquery');

    var games = {'games': []};
    var ix_ctr = 0;

    var build_data = function(g, p, nbr_games){
        games['games'][ix_ctr++] = $.extend(g, p);
        if (nbr_games == ix_ctr){
            //
            // UGLY HACK... when i'm at the last game, return response...
           console.log(games);
           res.render('partials/mypicks', games);
        }
    }

    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        var gamesCollection = db.collection('games');
        gamesCollection.find({'week_id': '1'}).toArray(function(err, gameResults) {
            if (err) throw err;


            for (var i = 0; i < gameResults.length; i++){
                var picksCollection = db.collection('picks');
                var t_game_id = gameResults[i].id;
                var inner_ctr = 0;
                picksCollection.findOne({"user_id": req.user.id, "game_id": t_game_id}, function(err, picksResults) {
//                    "user_id": "1",
//                        "game_id": "1",
//                        "team_id": "1",
//                        "isCorrect": null
                    var r;
                    if (!picksResults)
                    { r = {
                        "pick_team_id": ""
                        }
                    } else {
                        r = {
                            "pick_team_id": picksResults.team_id
                        }
                    }
                    build_data(gameResults[inner_ctr++], r, i); // i will be upper limit when this hits
                })
            }
        });
//        db.close();
    });

}

exports.contact = function (req, res) {
    res.render('partials/contact');
}

