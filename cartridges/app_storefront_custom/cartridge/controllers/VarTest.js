'use strict';
var server = require ('server');

server.get ('VarTest', function (req,res,next) {
    var test = 'Test';
    res.render("training/vartest", { test:test });
    return next ();

});

module.exports = server.exports();