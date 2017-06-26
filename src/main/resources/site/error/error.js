/**
 * Created by Martin on 6/26/2017.
 */
var thymeleaf = require('/lib/xp/thymeleaf');

var view404 = resolve('404.html');
var viewGeneric = resolve('error.html');

exports.handle404 = function (err) {
    var body = thymeleaf.render(view404, {});
    return {
        contentType: 'text/html',
        body: body
    }
};