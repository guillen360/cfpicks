/*
 API documentation for queries can be found in github:
 https://github.com/mongodb/node-mongodb-native

 list of primitives:
 var mongo = require('mongodb');
 // Create new instances of BSON types
 new mongo.Long(numberString)
 new mongo.ObjectID(hexString)
 new mongo.Timestamp()  // the actual unique number is generated on insert.
 new mongo.DBRef(collectionName, id, dbName)
 new mongo.Binary(buffer)  // takes a string or Buffer
 new mongo.Code(code, [context])
 new mongo.Symbol(string)
 new mongo.MinKey()
 new mongo.MaxKey()
 new mongo.Double(number)  // Force double storage

 */

var mongo = require('mongodb');
var format = require('util');

var mongourl = require('./server').mongourl;

var appCollections = [
    {
        "name": "users",
        "data":
            [
                {
                    "id": "1",
                    "user_name": "test001"
                },
                {
                    "id": "2",
                    "user_name": "test002"
                },
                {
                    "id": "3",
                    "user_name": "test003"
                }
            ]
    },
    {
        "name": "picks",
        "data":
        [
            {
                "user_id": "1",
                "game_id": "1",
                "team_id": "1",
                "isCorrect": null
            },
            {
                "user_id": "1",
                "game_id": "2",
                "team_id": "3",
                "isCorrect": null
            },
            {
                "user_id": "2",
                "game_id": "1",
                "team_id": "2",
                "isCorrect": null
            },
            {
                "user_id": "2",
                "game_id": "2",
                "team_id": "4",
                "isCorrect": null
            },
            {
                "user_id": "3",
                "game_id": "2",
                "team_id": "4",
                "isCorrect": null
            }
        ]
    },
    {
        "name": "games",
        "data":
        [
            {
                "id": "1",
                "week_id": "1",
                "home_team_id": "1",
                "away_team_id": "2",
                "game_date": new Date('Aug 31, 2013'),
                "spread": -3,
                "wasSpreadCovered": null,
                "home_team_score": "0",
                "away_team_score": "0"
            },
            {
                "id": "2",
                "week_id": "1",
                "home_team_id": "3",
                "away_team_id": "4",
                "game_date": new Date('Aug 30, 2013'),
                "spread": 7,
                "wasSpreadCovered": null,
                "home_team_score": "0",
                "away_team_score": "0"
            }
        ]
    },
    {
        "name": "teams",
        "data":
        [
            {
                "id": "1",
                "college": "University of Texas at Austin",
                "abbreviation": "UT",
                "city": "Austin",
                "state": "TX",
                "nickname": "Longhorns",
                "logo": "longhorns.jpg"
            },
            {
                "id": "2",
                "college": "Texas A&M University",
                "abbreviation": "TAMU",
                "city": "College Station",
                "state": "TX",
                "nickname": "Aggies",
                "logo": "aggies.jpg"
            },
            {
                "id": "3",
                "college": "University of Notre Dame",
                "abbreviation": "ND",
                "city": "Notre Dame",
                "state": "IN",
                "nickname": "Fighting Irish",
                "logo": "nd.jpg"
            },
            {
                "id": "4",
                "college": "University of Oklahoma",
                "abbreviation": "OK",
                "city": "Norman",
                "state": "OK",
                "nickname": "Sooners",
                "logo": "sooners.jpg"
            }
        ]
    },
    {
        "name": "weeks",
        "data":
        [
            {
                "id": "1",
                "start_date": new Date("Aug 25, 2013"),
                "end_date": new Date("Aug 31, 2013"),
                "active": true
            },
            {
                "id": "2",
                "start_date": new Date("Sept 1, 2013"),
                "end_date": new Date("Sept 7, 2013"),
                "active": false
            },
            {
                "id": "3",
                "start_date": new Date("Sept 8, 2013"),
                "end_date": new Date("Sept 14, 2013"),
                "active": false
            },
            {
                "id": "4",
                "start_date": new Date("Sept 15, 2013"),
                "end_date": new Date("Sept 21, 2013"),
                "active": false
            },
            {
                "id": "5",
                "start_date": new Date("Sept 22, 2013"),
                "end_date": new Date("Sept 28, 2013"),
                "active": false
            }
        ]
    }
    ];


mongo.MongoClient.connect(mongourl, function(err, db) {
    if(err) throw err;

    // drop all tables:
    for (var i = 0; i < appCollections.length; i++)
    {
        //console.log(format("deleting %s ....", appCollections[i]["name"]));
        var collection = db.collection(appCollections[i]["name"]);
        collection.drop();
    }

    // recreate data:
    for (var i = 0; i < appCollections.length; i++)
    {
        //console.log(format("deleting %s ....", appCollections[i]["name"]));
        var collection = db.collection(appCollections[i]["name"]);
        for (var j = 0; j < appCollections[i]["data"].length; j++)
        {
            collection.insert(
                appCollections[i]["data"][j],
                function(err, docs) {
                    if(err) throw err;

                    console.log("stored rec");
                }
            );
        }
    }
});
