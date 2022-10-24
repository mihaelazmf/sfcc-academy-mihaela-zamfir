'use strict';
var server = require ('server');
var ProductMgr = require('dw/catalog/ProductMgr')

server.get("Show", function (req, res, next){
    var product = ProductMgr.getProduct("");
    res.render("vartest/vartest", {product:product});
    return next();
}
);

module.exports = server.exports();
/*var ProductMgr = require('dw/catalog/ProductMgr');


server.get("Start", function (req, res, next){

    var product = ProductMgr.getProduct("P0048M");
    var viewData = res.getViewData()
    viewData.product = product
    res.setViewData(viewData)
    res.render("training/product")
    return next ();
})
module.exports = server.exports ();*/



