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
    res.render('partials/mypicks');
}

exports.contact = function (req, res) {
    res.render('partials/contact');
}

