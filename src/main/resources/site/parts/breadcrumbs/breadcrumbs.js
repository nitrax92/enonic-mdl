/**
 * Created by Martin on 6/27/2017.
 */
var libs = {
    portal: require('/lib/xp/portal'), // Import the portal functions
    content: require('/lib/xp/content'), // Import the content library functions
    thymeleaf: require('/lib/xp/thymeleaf'), // Import the Thymeleaf rendering function
    menu: require('/lib/enonic/menu'),
};


exports.get = function(req) {
    var breadcrumbs = libs.menu.getBreadcrumbMenu({
        linkActiveItem: false,
        showHomepage: true,
        homepageTitle: 'Home',
        dividerHtml: '<span class="divider">&gt;</span>'
    });
    var params = {
        breadcrumbs: breadcrumbs
    };

    var stylesheetAssetUrl = libs.portal.assetUrl({path: 'parts/breadcrumbs/breadcrumbs.css'});
    var stylesheetUrl = "<link rel=stylesheet href='" + stylesheetAssetUrl + "'>";
    // Rendering time
    var view = resolve("breadcrumbs.html");
    var body = libs.thymeleaf.render(view, params);
    return {
        body: body,
        pageContributions : {
            "headEnd": stylesheetUrl
        }
    };
}


