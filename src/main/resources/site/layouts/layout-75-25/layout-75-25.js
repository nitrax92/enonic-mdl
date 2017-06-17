/**
 * Created by Mello on 6/17/2017.
 */
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {

    // Find the current component.
    var component = portal.getComponent();

    // Resolve the view
    var view = resolve('./layout-75-25.html');

    // Define the model
    var model = {
        region1: component.regions["1"],
        region2: component.regions["2"],

        spacingBoolean: component.config['no_spacing']
    };

    //log.info("Compnent: %s" , component);

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};
