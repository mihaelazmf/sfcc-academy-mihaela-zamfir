'use strict';
var server = require('server');

server.extend (module.superModule)

/*var controller = require (module.superModule)

server.extend(controller)*/

server.get ('HelloShow', function (req, res, next){
var  viewData = res.getViewData();

viewData.example = "One String"

res.setViewData(viewData);

res.render ('cart/cart');

return next ();
});


module.exports = server.exports();

