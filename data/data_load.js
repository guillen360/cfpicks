var teams = require('./teams').teams;
var weeks = require('./weeks').weeks;
var games = require('./games').games;
var mongo = require('mongodb');
var format = require('util');

var mongourl = require('../server').mongourl;

var load_games = function(){
    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        // drop:
        var collection = db.collection('games');

        collection.drop();

        var collection = db.collection('games');

        // recreate data:
        var ctr = 0;
        for (var i = 0; i < games.length; i++){
            collection.insert(
                games[i],
                function(err, docs) {
                    if(err) throw err;

                    ctr++;
                    console.log("game rec stored" + ctr);
                }
            );
        }

        var create_bigboard = require('./create_bigBoard').create_bigboard;
        create_bigboard();
    });
}

var load_teams = function() {
    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        // drop:
        var collection = db.collection('teams');

        collection.drop();

        var collection = db.collection('teams');

        // recreate data:
        var ctr = 0;
        for (var key in teams){
            collection.insert(
                teams[key],
                function(err, docs) {
                    if(err) throw err;

                    ctr++;
                    console.log("team rec stored " + ctr);
                }
            );
        }
        load_games();
    });
}

var load__weeks = function() {
    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        // drop:
        var collection = db.collection('weeks');

        collection.drop();

        var collection = db.collection('weeks');

        // recreate data:
        var ctr = 0;
        for (var i = 0; i < weeks.length; i++){
            collection.insert(
                weeks[i],
                function(err, docs) {
                    if(err) throw err;

                    ctr++;
                    console.log("week rec stored" + ctr);
                }
            );
        }
        load_teams();
    });
}

load__weeks();