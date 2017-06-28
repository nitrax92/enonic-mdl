var libs = {
    portal: require('/lib/xp/portal'), //??
    thymeleaf: require('/lib/xp/thymeleaf'), // Templateing engine
    menu: require('/lib/enonic/menu')
};
exports.get = function (req) {
    // Page Content
    var content = libs.portal.getContent();
    var site = libs.portal.getSite();
    var view = resolve('default.html');

    // Prepare the model that will be passed to the view
    var model = createModel();

    log.info("%s", libs.portal.getSiteConfig());
    var breadcrumbItems = libs.menu.getBreadcrumbMenu({});


    function createModel(){
        var model = {};
        model.contentRegion = content.page.regions['mdl-content'];
        model.pageTitle = site.page.config['title'] || 'Default Title';
        model.bgImg = generateBackgroundImage(site.page.config['background-image']);
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


    function generateBackgroundImage(bg_img_id) {
        if(bg_img_id) {
            // Get the style for the background image in order.
            // Save it as a string.

            var img_url = libs.portal.imageUrl({
                id: bg_img_id,
                scale: 'block(1920, 1080)'});

            var background_img_style = 'background-image: url('+ img_url + ');';

            var img_properties =
                'background-position: center;background-repeat: no-repeat; background-size: cover;';

            return background_img_style + img_properties;

            //return bg_img_id

        }
        else {
            return ''
        }
    }


    return {
        body: libs.thymeleaf.render(view, model)
    }
};


exports.post = function (req) {
    log.info("PAGE POST REQUEST");
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

}