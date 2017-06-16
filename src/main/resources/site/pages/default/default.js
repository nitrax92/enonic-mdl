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

        //Header
        model.fixedHeaderBoolean = site.page.config['fixed_header'];
        model.fixedDrawerBoolean = site.page.config['fixed_drawer'];
        model.drawerBoolean = site.page.config['drawer'];

        // Footer
        model.footerBoolean = site.page.config['layout_footer'];
        model.footerTitle = site.page.config['footer_title'];


        return model;
    }


    return {
        body: libs.thymeleaf.render(view, model)
    }
};