/**
 * Created by Mello on 6/7/2017.
 */
var portalLib = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function

// Handle GET requests
exports.get = function(portal) {

    // Find the current component from request
    var component = portalLib.getComponent();

    // Find a config variable for the component
    var info = component.config; //['info'] || [];

    //var info = []

    // Define the model
    var model = {
        info_title: info['info_title'] || '',
        info_content: info['info_content'] || '',
        image_id: info['info_image'] || 'False'
    };

    // Resolve the view
    var view = resolve('info_card.html');

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};