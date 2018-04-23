// ## Initialize App

(function (){
	var app = window.app = {
		env : {},
		utils : {},
		data : {}
	};
	
	// ## Environment
	app.env.isPortrait = window.matchMedia('(orientation: portrait)').matches;
	app.env.loader = '<div class="loader-wrapper"><img src="RRLoader.png"></div>';
	
	app.data = {
		firstvariable : 0,
		secondvariable : []
	};

}());

