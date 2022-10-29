'use strict';

var server = require('server');

server.get('HelloWorld', function (req, res, next) {
    var myvariable = "Just a string"
    res.render("service/rendering");
    return next();
});


module.exports = server.exports();