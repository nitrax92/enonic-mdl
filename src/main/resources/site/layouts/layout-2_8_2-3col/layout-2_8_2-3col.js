/**
 * Created by Lawliet on 6/19/2017.
 */
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {

    // Find the current component.
    var component = portal.getComponent();

    // Resolve the view
    var view = resolve('./layout-2_8_2-3col.html');

    // Define the model
    var model = {
        region1: component.regions["1"],
        region2: component.regions["2"],
        region3: component.regions["3"],

        spacingBoolean: component.config['no_spacing']
    };

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};