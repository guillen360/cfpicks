
exports.findAll = function(req, res){
    var mongourl = require('./../app').mongourl;
    var mongo = require('mongodb');

    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        var collection = db.collection('Users');
        collection.find().toArray(function(err, results) {
            if (err) { res.json(500, { "message": "error has occurred"});};

            res.json(results);

            db.close();
        });
    })
};

exports.findByID = function(req, res){
    var mongourl = require('./../app').mongourl;
    var mongo = require('mongodb');

    var u_id = req.params.user_id;
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;

        var collection = db.collection("Users");
        var ObjectID = mongo.Long;
        var lookupID = new ObjectID(u_id);
        collection.findOne({user_id: lookupID}, function(err, results){
            if (err) { res.json(500, { "message": "error has occurred"});};

            res.json(results);
            db.close();
        })
    });
};

exports.getPicksByUser = function(req, res){
    var mongourl = require('./../app').mongourl;
    var mongo = require('mongodb');

    var u_id = req.params.user_id;
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;

        var collection = db.collection("Picks");
        var ObjectID = mongo.Long;
        var lookupID = new ObjectID(u_id);
        collection.find({user_id: lookupID}).toArray(function(err, results){
            if (err) { res.json(500, { "message": "error has occurred"});};

            res.json(results);
            db.close();
        })
    });
};

exports.getPicksByUserByGame = function(req, res){
    var mongourl = require('./../app').mongourl;
    var mongo = require('mongodb');

    var u_id = req.params.user_id;
    var g_id = req.params.game_id;
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;

        var collection = db.collection("Picks");
        var ObjectID = mongo.Long;
        var obj_user_id = new ObjectID(u_id);
        var obj_game_id = new ObjectID(g_id);
        collection.findOne({user_id: obj_user_id, game_id: obj_game_id}, function(err, results){
            if (err) { res.json(500, { "message": "error has occurred"});};

            res.json(results);
            db.close();
        })
    });
};