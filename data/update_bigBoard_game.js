var update_BB_game = function(result){
    var findOneByCollection = require('../server').findOneByCollection;
    var storeBigBoardCollection = require('../server').findOrCreateByCollection;
    var Pick;
    var Game;
    var User;
    var BigBoardRec;

    var successMsg = function(){
        console.log('record stored succesfully:');
    }

    var saveBigBoardGame = function(){
//        console.log(Pick);
//        console.log(Game);
//        console.log(BigBoardRec);

        queryDoc = {
            'week_id': Game['week_id'],
            "game": Game
        }
        updateDoc = {
            'week_id': Game['week_id'],
            "game": Game
        }
        var users = {};
        for (var user in BigBoardRec['users']){
            if (user == User['id']){ continue;}

            users[user] = BigBoardRec['users'][user];
        }
        var pick_team_name = null;
        if (Pick['team_id'] == Game['home_team_id']){
            pick_team_name = Game['home_team']['college'];
        } else if (Pick['team_id'] == Game['away_team_id']) {
            pick_team_name = Game['away_team']['college'];
        }
//        console.log(pick_team_name);
//        console.log(Pick);
        users[User['id']] = {'pick_team_id': Pick['team_id'], 'isCorrect': Pick['isCorrect'], 'name': User['name'], 'pick_team_name': pick_team_name};

        updateDoc['users'] = users;
//        console.log(updateDoc);
        storeBigBoardCollection(queryDoc, updateDoc, 'bigboard', successMsg)

    }

    var callbackUser = function(user){
        User = user;

        saveBigBoardGame();
    }

    var callbackBigBoard = function(bigboard){
        BigBoardRec = bigboard;

        findOneByCollection({"id": Pick['user_id']}, 'users', callbackUser)
    }

    var callbackGame = function(game){
        Game = game;

        findOneByCollection({"week_id": Game['week_id'], "game": Game}, 'bigboard', callbackBigBoard)
    }

    Pick = result;
    findOneByCollection({"id": Pick['game_id']}, 'games', callbackGame);
}

exports.update_BB_game = update_BB_game;

// for testing...

//update_BB_game({"game_id": 'W02G02', "user_id":'108870088', "team_id": 'SHOUSTONST'});