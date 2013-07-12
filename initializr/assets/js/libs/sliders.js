define(function(){
	
	return {

		init: function () {
			// sliders
			$(".slider").each(function () {
				var $t = $(this);

				var opts = {
					responsive : function () {
						return $t.data("responsive") > 0 ? $t.data("responsive") : false;
					},
					fx : function () {
						return $t.data("fx") ? $t.data("fx") : "slide";
					},
					time: function () {
						return $t.data("time") ? $t.data("time") : 5000;
					}
				}

				$t.find(".list").carouFredSel({
					responsive: opts.responsive(),
					scroll	: {
						fx: opts.fx()
					},
					auto	: {
						duration: 1000,
						items 			: 1,
						timeoutDuration	: opts.time(),
						pauseOnHover	: "immediate",
						onBefore: function( data ) {
							unhighlight( data.items.old );
						},
						onAfter	: function( data ) {
							highlight( data.items.visible );
						}
					}
				});
			});

			function highlight( items ) {
				items.filter(":first-child").addClass("on");
				return items;
			}

			function unhighlight( items ) {
				items.removeClass("on");
				return items;
			}
		}
	}
});