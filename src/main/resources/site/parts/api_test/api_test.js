/**
 * Created by Martin on 6/27/2017.
 */
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var portal = require('/lib/xp/portal');
var httpClientLib = require('/lib/xp/http-client');
var util = require('/lib/enonic/util');
// Handle GET requests
exports.get = function(req) {
    // Resolve the view
    var view = resolve('api_test.html');


    var result = httpClientLib.request({
        url: 'https://jsonplaceholder.typicode.com/comments/' + '1',
        method: 'GET',
    });

    util.log(JSON.parse(result.body));
    var component_url = portal.componentUrl(this);

    // Define the model
    var model = {
        componentUrl: component_url,
        result: JSON.parse(result.body)
    };

    // Render a thymeleaf template
    var body = thymeleaf.render(view, model);

    // Return the result
    return {
        body: body,
    };

};

exports.post = function (req) {
    var api_url = req.params.api_url;
    try {
        var result = httpClientLib.request({
            url: api_url,
            method: 'GET'
        });
        if (result.status == 200){
            result = JSON.parse(result.body);
        }
        result.success = true
    }
    catch(err) {
        var result = {
            success: false
        }
    }

    // Return the result
    return {
        body: {
            result: result
        },
        contentType: 'application/json'
    };
};
