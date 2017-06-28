/**
 * Created by Martin on 6/27/2017.
 */
/**
 * Created by Mello on 6/12/2017.
 */
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var portalLib = require('/lib/xp/portal');

// Handle GET requests
exports.get = function(portal) {
    // Resolve the view
    var view = resolve('clock-card.html');

    var url = portalLib.serviceUrl({
        service: 'getDate'
    });

    // Define the model
    var model = {serviceUrl: url};

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
    };

};