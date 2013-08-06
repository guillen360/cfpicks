exports.index = function(req, res){
    res.render('index', {test:'Kyle'});
};

exports.ajax_bigboard = function(req, res){
    // res.json({test:'this is an ajax test'});
    res.render('bigboard');
};

exports.ajax_mypicks = function(req, res){
    res.json({test:'this is another test'});
};