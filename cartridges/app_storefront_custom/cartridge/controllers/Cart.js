'use strict';
var server = require('server');

server.extend (module.superModule)

/*var controller = require (module.superModule)

server.extend(controller)*/

server.append ('HelloWorld', function (req, res, next){
var  viewData = res.getViewData();

viewData.example = "One String"

res.setViewData(viewData);

//res.render ('training/cart');

return next ();
});


module.exports = server.exports();

