function resizeMenu() {
	var h=$(window).height(),
		w=$(window).width(),
		activeMenuHeight=$.mobile.activePage.find('.page-menu').height(),
		menu=$('.page-menu');
	
	menu.each(function() {
		$(this).css('height','auto');
	});
	
	setTimeout(function() {
		if (activeMenuHeight > h) {
			menu.each(function(){$(this).css('height',h-40);});
		} else if (w>=800) {
			menu.each(function(){$(this).css('height',h);});
		} else if (w<800) {
			menu.each(function(){$(this).css('height','auto');});
		}	
	},0); 
			
}

var initialize = _.once(resizeMenu);
function toggleMenu(menu,icon){
	initialize();
	setTimeout(function() {
		menu.slideToggle();
		icon.find("img").toggleClass('highlighted');
	}, 0);
}

$(document).on("click", function(e){
	var menuContainer = $(".page-menu"),
		menuButton = $(".menu-button"),
		view = $(document);
	if (menuContainer.length) {
		if ((!menuContainer.is(e.target) && !menuButton.is(e.target) && 
				menuButton.has(e.target).length === 0)) {
			if (menuContainer.is(":visible")) {
				view.find('.page-menu').slideUp();
				view.find('.menu-button').removeClass('highlighted');
			}
		}
	}
});



	
	
	