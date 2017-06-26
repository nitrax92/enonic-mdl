/**
 * Created by Martin on 6/26/2017.
 */
var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf'),
    util: require('/lib/enonic/util')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('article-show.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};

        var result = libs.portal.getContent();

        libs.util.log(result);

        model.imgUrl = libs.portal.imageUrl({
            id: result.data.image,
            scale: 'block(800,600)'
        });

        log.info(model.imgUrl);

        model.title = result.data.title;
        model.preface = result.data.preface;
        model.bodyText = libs.portal.processHtml({
            value: result.data.bodyText
        });

        return model;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}