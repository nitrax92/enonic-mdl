var libs = {
    thymeleaf: require('/lib/xp/thymeleaf'),
    portal: require('/lib/xp/portal'),
    util: require('/lib/enonic/util')
};

exports.get = function(req) {
    // Resolve the view
    var view = resolve('section_button.html');
    // Find the current component from request
    var component = libs.portal.getComponent();
    // Collect the config
    var config = component.config;
    var model = createModel();


    log.info(req.mode);

    // Render a thymeleaf template
    var body = libs.thymeleaf.render(view, model);


    // Return the result
    return {
        body: body,
        contentType: 'text/html',
        pageContributions: {
            "headEnd": "<link rel=" + "stylesheet" + " " +  "href=" + "'" + libs.portal.assetUrl({path: 'parts/section_button/section_button.css'}) + "'" + "/>"
        }
    };


    function createModel() {
        var model = {};
        //Headline Text
        model.text =  config.text;

        model.height = config.height;

        //Color Configurations
        model.bg_color = config.bg_color_code;
        //Font Color
        //TODO: Add Font Color config
        //This specific object ID
        model.obj_id = config.object_id; //TODO: Find something to replace this 'logic'.

        // Images
        model.bg_img = getImgUrl(config.bg_img);
        model.bg_img_hover = getImgUrl(config.bg_img_hover);

        return model
    }



    function getImgUrl(img_id) {
        var url = libs.portal.imageUrl({
            id: img_id,
            scale: 'square(250)'
        });
        return url
    }

};