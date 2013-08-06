exports.findAll = function(req, res){
    var mongourl = require('./../app').mongourl;
    var mongo = require('mongodb');

    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        var collection = db.collection('Teams');
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

    var u_id = req.params.team_id;
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;

        var collection = db.collection("Teams");
        var ObjectID = mongo.Long;
        var lookupID = new ObjectID(u_id);
        collection.findOne({team_id: lookupID}, function(err, results){
            if (err) { res.json(500, { "message": "error has occurred"});};

            res.json(results);
            db.close();
        })
    });
};