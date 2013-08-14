exports.base = function(req, res){
    // renders with partial of 'index' by default...
    res.render('base');
};


// partials:
exports.index = function (req, res) {
    res.render('partials/index');
}

exports.bigboard = function (req, res) {
    res.render('partials/bigboard');
}

exports.mypicks = function (req, res) {
    res.render('partials/mypicks');
}

exports.contact = function (req, res) {
    res.render('partials/contact');
}

