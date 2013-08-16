var teams = require('./teams').teams;
var weeks = require('./weeks').weeks;
var games = require('./games').games;
var mongo = require('mongodb');
var format = require('util');

var mongourl = require('../server').mongourl;


mongo.MongoClient.connect(mongourl, function(err, db) {
    if(err) throw err;

    // drop:
    var collection = db.collection('teams');

    collection.drop();

    var collection = db.collection('teams');

    // recreate data:
    for (var key in teams){
        collection.insert(
            teams[key],
            function(err, docs) {
                if(err) throw err;

                console.log("stored rec");
            }
        );
    }
});

mongo.MongoClient.connect(mongourl, function(err, db) {
    if(err) throw err;

    // drop:
    var collection = db.collection('weeks');

    collection.drop();

    var collection = db.collection('weeks');

    // recreate data:
    for (var i = 0; i < weeks.length; i++){
        collection.insert(
            weeks[i],
            function(err, docs) {
                if(err) throw err;

                console.log("stored rec");
            }
        );
    }
});

mongo.MongoClient.connect(mongourl, function(err, db) {
    if(err) throw err;

    // drop:
    var collection = db.collection('games');

    collection.drop();

    var collection = db.collection('games');

    // recreate data:
    for (var i = 0; i < games.length; i++){
        collection.insert(
            games[i],
            function(err, docs) {
                if(err) throw err;

                console.log("stored rec");
            }
        );
    }
});