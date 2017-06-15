/**
 * Created by Mello on 6/12/2017.
 */
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function

// Handle GET requests
exports.get = function(portal) {
    // Resolve the view
    var view = resolve('mdl-buttons.html');
    // Define the model
    var model = {};

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};