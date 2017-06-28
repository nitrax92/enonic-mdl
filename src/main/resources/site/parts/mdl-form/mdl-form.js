/**
 * Created by Lawliet on 6/19/2017.
 */
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var portal = require('/lib/xp/portal');
var utils = require('/lib/enonic/util');

// Handle GET requests
exports.get = function(req) {
    log.info("MDL FORM------------- GET REQUEST");
    // Resolve the view
    var view = resolve('mdl-form.html');

    var component_url = portal.componentUrl(this);
    log.info(component_url);

    // Define the model
    var model = {componentUrl: component_url};

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};

exports.post = function (req) {
    log.info("MDL FORM------------- POST REQUEST");
    utils.log(req);
    // Return the result
    return {
        body: {
           message: req.params.input
        },
        contentType: 'application/json'
    };

};