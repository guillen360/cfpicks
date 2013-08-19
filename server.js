
/**********************************************************
 **********************************************************
            MODULE DEPENDENCIES
 **********************************************************
 **********************************************************
 */

var express = require('express')
    , http = require('http')
    , path = require('path')
    , routes = require('./routes')
    , mongo = require('mongodb')
    , conf = require('./conf')
    , everyauth = require('everyauth');

/**********************************************************
 **********************************************************
             DB SETUP
 **********************************************************
 **********************************************************
 */
var mongourl = '';

if(process.env.MONGO_USER &&
    process.env.MONGO_PW &&
    process.env.MONGO_DB &&
    process.env.MONGO_NAME &&
    process.env.MONGO_PORT) {
    mongourl =
        "mongodb://" +
        process.env.MONGO_USER +
        ":" +
        process.env.MONGO_PW +
        "@" +
        process.env.MONGO_NAME +
        ":" +
        process.env.MONGO_PORT +
        "/" +
        process.env.MONGO_DB;
    console.log('found env vars');
} else {
    console.log('NO ENV VARS!' + process.env.MONGO_USER);
    mongourl = "mongodb://localhost:27017/db";
}

exports.mongourl = mongourl;
/**********************************************************
 **********************************************************
        AUTH SETUP
 **********************************************************
 **********************************************************
 */
everyauth.debug = true;

var usersById = {};
//var nextUserId = 0;

function addUser (source, userDoc, user_id) {
    var user;
    if (arguments.length === 1) { // password-based
        user = userDoc = source;
        user.id = user_id;
        return usersById[nextUserId] = user;
    } else { // non-password-based
//        user = usersById[user_id] = {id: user_id};
//        user[source] = sourceUser;
        user = usersById[user_id] = userDoc;
    }
    return user;
}

everyauth.everymodule
    .findUserById( function (id, callback) {
        callback(null, usersById[id]);
    }
);

findOrCreateByCollection = function(searchDoc, updateDoc, collectionName, callbackFunc) {
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;
        // ++++++++++++++++
        var collection = db.collection(collectionName);
        collection.findAndModify(
            searchDoc,
            [['_id','asc']],
            updateDoc,
            {upsert:true, new:true},
            function(err, results) {
                if (err) throw err;
                // ++++++++++++++++
                // Let's close the db
                if (callbackFunc){
                    callbackFunc(results);
                }
//                db.close();
            }
        );
    });
};
findAllByCollection = function(searchDoc, collectionName, callbackFunc) {
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;
        // ++++++++++++++++
        var collection = db.collection(collectionName);
        collection.find(searchDoc).toArray(function(err, results) {
            if (err) throw err;
            // ++++++++++++++++
            // Let's close the db
            if (callbackFunc){
                callbackFunc(results);
            }
//            db.close();
            }
        );
    });
};
findOneByCollection = function(searchDoc, collectionName, callbackFunc) {
    mongo.MongoClient.connect(mongourl, function(err, db){
        if (err) throw err;
        // ++++++++++++++++
        var collection = db.collection(collectionName);
        collection.findOne(searchDoc, function(err, results) {
            if (err) throw err;
            // ++++++++++++++++
            // Let's close the db
            if (callbackFunc){
                callbackFunc(results);
            }
//                db.close();
            }
        );
    });
};
exports.findOrCreateByCollection = findOrCreateByCollection;
exports.findAllByCollection = findAllByCollection;
exports.findOneByCollection = findOneByCollection;

var usersByGoogleId = {};
var usersByLinkedinId = {};
var usersByFbId = {};
var usersByTwitId = {};

everyauth.google
    .appId(conf.google.clientId)
    .appSecret(conf.google.clientSecret)
    .scope('https://www.googleapis.com/auth/userinfo.profile https://www.google.com/m8/feeds/')
    .findOrCreateUser( function (sess, accessToken, extra, googleUser) {
        console.log("i have logged in using GOOGLE");

        googleUser.refreshToken = extra.refresh_token;
        googleUser.expiresIn = extra.expires_in;

        searchDoc = {"id": googleUser.id, "type": "google"};
        userDoc = {
            id: googleUser.id,
            type: "google",
            name: googleUser.given_name,
            google: googleUser
        };
        findOrCreateByCollection(searchDoc, userDoc, "users", null);

        return usersByGoogleId[googleUser.id] || (usersByGoogleId[googleUser.id] = addUser('google', userDoc, googleUser.id));
    })
    .redirectPath('/#index');

everyauth.linkedin
    .consumerKey(conf.linkedin.apiKey)
    .consumerSecret(conf.linkedin.apiSecret)
    .findOrCreateUser( function (sess, accessToken, accessSecret, linkedinUser) {
        console.log("i have logged in using LINKEDIN");

        searchDoc = {"id": linkedinUser.id, "type": "linkedin"};
        userDoc = {
            id: linkedinUser.id,
            type: "linkedin",
            name: linkedinUser.firstName,
            linkedin: linkedinUser
        };
        findOrCreateByCollection(searchDoc, userDoc, "users", null);

        return usersByLinkedinId[linkedinUser.id] || (usersByLinkedinId[linkedinUser.id] = addUser('linkedin', userDoc, linkedinUser.id));
    })
    .redirectPath('/#index');

everyauth
    .twitter
    .consumerKey(conf.twit.consumerKey)
    .consumerSecret(conf.twit.consumerSecret)
    .findOrCreateUser( function (sess, accessToken, accessSecret, twitUser) {
        console.log("i have logged in using TWITTER");

        searchDoc = {"id": twitUser.id_str, "type": "twitter"};
        userDoc = {
            id: twitUser.id_str,
            type: "twitter",
            name: twitUser.name,
            twitter: twitUser
        };
        findOrCreateByCollection(searchDoc, userDoc, "users", null);

        return usersByTwitId[twitUser.id_str] || (usersByTwitId[twitUser.id_str] = addUser('twitter', userDoc, twitUser.id_str));

    })
    .redirectPath('/#index');

everyauth
    .facebook
    .appId(conf.fb.appId)
    .appSecret(conf.fb.appSecret)
    .scope('email')
    .findOrCreateUser( function (session, accessToken, accessTokenExtra, fbUserMetadata) {
        console.log("i have logged in using facebook");

        searchDoc = {"id": fbUserMetadata.id, "type": "facebook"};
        userDoc = {
            id: fbUserMetadata.id,
            type: "facebook",
            name: fbUserMetadata.first_name,
            facebook: fbUserMetadata
        };
        findOrCreateByCollection(searchDoc, userDoc, "users", null);

        return usersByFbId[fbUserMetadata.id] || (usersByFbId[fbUserMetadata.id] = addUser('facebook', userDoc, fbUserMetadata.id));
    })
    .redirectPath('/#index');

/**********************************************************
 **********************************************************
                EXPRESS SETUP
 **********************************************************
 **********************************************************
 */

var app = express();

app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
//app.set('views', __dirname + '/public');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(conf.secretCookieParser));
app.use(express.session());
app.use(everyauth.middleware(app));
app.use(app.router);

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    app.locals.pretty = true;
}
/**********************************************************
 **********************************************************
 DB API
 **********************************************************
 **********************************************************
 */
var approvedDbs = ['teams', 'picks', 'weeks', 'games'];

sendCollection = function(req, res){
    if (req.loggedIn === false)
        res.send(401, {error_message: ["You are not authorized"]});

    if (approvedDbs.indexOf(req.params.collection) == -1)
    {
        // not in approved list:
//        res.send(500, {messsage: "page could not be found"});
        res.send(500, {error_message: ["resource not found"]});
    }
    mongo.MongoClient.connect(mongourl, function(err, db) {
        if(err) throw err;

        var collection = db.collection(req.params.collection);
        collection.find(req.query).toArray(function(err, results) {
            if (err)
            {
                res.json({ "message": "error has occurred"});
            }

            res.json(results);

            db.close();
        });
    });
};
/**********************************************************
 **********************************************************
                URL ROUTING
 **********************************************************
 **********************************************************
*/
// authenticate middleware function:
var authenticate = function(req, res, next) {
    if (!req.loggedIn){
        res.redirect('/login');
    }
    next();
}

// login:
app.get('/login', function(req, res){
    res.render('login');
});

// games for the week:
app.get('/api/mypicks/:week_id', authenticate, function(req, res){

    console.log("a get request was submitted to get my games and picks");

});

// update picks:
app.post('/api/picks', authenticate, routes.updateMyPicks);

// query database:
app.get('/api/:collection', authenticate, sendCollection);

// partials for ajax builds:
app.get('/partials/index', authenticate, routes.index);
app.get('/partials/bigboard', authenticate, routes.bigboard);
app.get('/partials/mypicks', authenticate, routes.mypicks);
app.get('/partials/contact', authenticate, routes.contact);
app.get('/partials/finishedpicks', authenticate, routes.finishedpicks);

// default:
app.get('/', authenticate, routes.base);

/**********************************************************
 **********************************************************
                LAUNCH SERVER
 **********************************************************
 **********************************************************
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
