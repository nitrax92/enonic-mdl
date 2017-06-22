var libs = {
    thymeleaf: require('/lib/xp/thymeleaf'),
    portal: require('/lib/xp/portal')
};


exports.get = function(portal) {
    // Resolve the view
    var view = resolve('section_button.html');

    // Find the current component from request
    var component = libs.portal.getComponent();

    // Find a config variable for the component
    var info = component.config; //['info'] || [];

    var text = info['text'] || "No Text";


    // Define the model
    var bg_img = libs.portal.imageUrl({
        id: info['bg_img'],
        scale: 'block(200,200)'

    });

    var bg_img_hover = libs.portal.imageUrl({
        id: info['bg_img_hover'],
        scale: 'width(300)'

    });

    var model = {
        obj_id: text,
        text: text,
        bg_img: bg_img,
        bg_img_hover: bg_img_hover,
        bg_color: info['bg_color_code']
    };

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

};