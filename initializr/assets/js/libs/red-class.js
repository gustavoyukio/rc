define(["sliders"], function(sliders){

	return {
		init: function () {
			$("body").niceScroll();

			// principal (menu)
			var w = 0;
			$("#principal .sub .menu li").each(function () {
				w += $(this).outerWidth();
			});
			$("#principal .sub .menu").css({ 
				"width": w, 
				"float": "none" 
			});

			// sliders
			sliders.init();

			// Features
			$("aside .feature-gallery").each( function () {
				$(this).hover( function () {
					$(this).find(".append-gallery").addClass("on");
				}, function () {
					$(this).find(".append-gallery").removeClass("on");
				});
			});
		}
	}

});