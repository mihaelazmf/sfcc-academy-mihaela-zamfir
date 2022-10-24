"use strict";

var server = require("server");

/*server.get('SubmitRegistration',  function(req, res, next){
    var trainingForm = server.forms.getForm('training');
    trainingForm.clear();

    res.render ('account/formrender',{
        trainingForm: trainingForm
    })
    return next();
})



module.exports = server.exports();*/

var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

server.get("Show",consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(
    req,
    res,
    next
) {
    var URLUtils = require("dw/web/URLUtils");
    var Resource = require("dw/web/Resource");
    var trainingForm = server.forms.getForm('training');
    trainingForm.clear();

    res.render ('account/formrender',{
        title: Resource.msg("training.form.title.submit", "forms", null),
        trainingForm: trainingForm,
        actionUrl: URLUtils.url("TrainingForm-SubmitRegistration").toString()
    })


     return next();
});

server.post(
    "SubmitRegistration",
     server.middleware.https,
    consentTracking.consent,
    csrfProtection.generateToken,
    function(req, res, next) {
        var Resource = require("dw/web/Resource");
        var URLUtils = require("dw/web/URLUtils");
       var trainingForm = server.forms.getForm('training');

        res.render('account/formrender', {
        title: Resource.msg("training.form.title.edit", "forms", null),
         trainingForm: trainingForm,
         actionUrl: URLUtils.url("TrainingForm-SubmitRegistration").toString()
        });

        return next();
    }
);

module.exports = server.exports();