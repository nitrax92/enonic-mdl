var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf'),
    content: require('/lib/xp/content'),
    util: require('/lib/enonic/util')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('article-cards.html'); // The view to render
    var model = createModel(); // The model to send to the view



    function createModel() {
        var model = {};

        model.articles = getArticles();
        model.card_size = calculateSize(model.articles.size);

        return model;
    }

    function calculateSize(size){
        if(size % 3 == 0) {
            return 4
        }

        else if(size % 2 == 0) {
            return 6
        }

        else {
            return 4
        }

    }

    function getArticles() {
        var currentContent = libs.portal.getContent();

        var result = libs.content.query({
            start: 0,
            count: 20,
            contentTypes: [
                app.name + ':article'
            ]
        });



        return result.hits;
    }

    //log.info("%s", model.articles);

    return {
        body: libs.thymeleaf.render(view, model)
    };
}