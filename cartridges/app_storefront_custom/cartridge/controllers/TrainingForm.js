'use strict';

 var server = require("server");

 server.get("ShowForm", function(req, res, next) {
     var profileForm = server.forms.getForm("trainingForms");

     res.render("training/trainingForm", { profileForm: profileForm });

     return next();
 });

 module.exports = server.exports();
