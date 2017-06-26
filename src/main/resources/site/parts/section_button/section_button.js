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



    // Get objects from the database and place in the model.
    function createModel() {
        var model = {};
        //Headline Text
        model.text =  config.text;
        model.height = config.section_height;

        //Color Configurations
        model.bg_color = config.bg_color_code;
        //var id = config.text.replace(" ", "_").toLowerCase();
        model.obj_id = config.text.replace(" ", "_").toLowerCase(); //TODO: Find something to replace this 'logic'.

        // Images
        model.bg_img = getImgUrl(config.bg_img);
        model.bg_img_hover = getImgUrl(config.bg_img_hover);

        return model
    }

    // Function to get url based on the image ID.
    function getImgUrl(img_id) {
        var url = libs.portal.imageUrl({
            id: img_id,
            scale: 'square(250)'
        });
        return url
    }
};