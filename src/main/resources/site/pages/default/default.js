var libs = {
    portal: require('/lib/xp/portal'), //??
    thymeleaf: require('/lib/xp/thymeleaf') // Templateing engine
};
exports.get = function (req) {
    // Page Content
    var content = libs.portal.getContent();
    var site = libs.portal.getSite();
    var view = resolve('default.html');

    // Prepare the model that will be passed to the view
    var model = createModel();


    function createModel(){
        var model = {};
        model.contentRegion = content.page.regions['mdl-content'];
        model.pageTitle = site.page.config['title'] || 'Default Title';
        model.bgImg = site.page.config['background-image'];
        model.colorScheme = site.page.config['color_scheme'] || 'indigo-pink';
        model.footerBoolean = site.page.config['layout_footer'];
        return model;
    }


    return {
        body: libs.thymeleaf.render(view, model)
    }
};