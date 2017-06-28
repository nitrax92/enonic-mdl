var libs = {
	portal: require('/lib/xp/portal'), // Import the portal functions
	content: require('/lib/xp/content'), // Import the content library functions
	thymeleaf: require('/lib/xp/thymeleaf'), // Import the Thymeleaf rendering function
	menu: require('/lib/enonic/menu')
};


exports.get = function(req) {
    	// Get my menu
    	var menuItems = libs.menu.getMenuTree(2);
    	var params = {
    		menuItems: menuItems
    	};

    	// Rendering time
    	var view = resolve("example-1level.html");
    	var body = libs.thymeleaf.render(view, params);
    	return { body: body };
}


