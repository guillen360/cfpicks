
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , games = require('./routes/games')
    , weeks = require('./routes/weeks')
    , users = require('./routes/users')
    , teams = require('./routes/teams');
/**
 *
 *
 * set up mongo db for appfrog deployment and local development
 */

if(process.env.MONGO_USER
    && process.env.MONGO_PW
    && process.env.MONGO_DB
    && process.env.MONGO_NAME
    && process.env.MONGO_PORT) {
    exports.mongourl =
        "mongodb://"
        + process.env.MONGO_USER
        + ":"
        + process.env.MONGO_PW
        + "@"
        + process.env.MONGO_NAME
        + ":"
        + process.env.MONGO_PORT
        + "/"
        + process.env.MONGO_DB;
    console.log('found env vars');
} else {
    console.log('NO ENV VARS!' + process.env.MONGO_USER);
    exports.mongourl = "mongodb://localhost:27017/db";
}

var app = express();

app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    app.locals.pretty = true;
}

// Weeks:
app.get('/weeks', weeks.findAll);
app.get('/weeks/:week_id', weeks.findByID);

app.get('/weeks/:week_id/games', games.findGamesByWeek);

// Games:
app.get('/games', games.findAll);
app.get('/games/:game_id', games.findByID);

// Users:
app.get('/users', users.findAll);
app.get('/users/:user_id', users.findByID);
app.get('/users/:user_id/picks', users.getPicksByUser);
app.get('/users/:user_id/picks/:game_id', users.getPicksByUserByGame);

// Teams:
app.get('/teams', teams.findAll);
app.get('/teams/:team_id', teams.findByID);

// default:
app.get('/', routes.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
