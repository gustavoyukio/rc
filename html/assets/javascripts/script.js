/* ==========================================================================
   Author:      YOUR NAME (Agence)
   Version:     1.0.0
   Create:      01/10/2012

   Revision:    OTHER DEVELOPER
   Last Mod.:   03/10/2012
========================================================================== */

/* -----------------------------------

  *Indice

    $anonymous

----------------------------------- */


/* -----------------------------------
    $anonymous
----------------------------------- */
;(function(w, $){
	"use strict";

	var init, form;

	init = function(){
		form.init();
	}

	form = {
		placeholder: function(){
			if ( $(":placeholder") && navigator.userAgent.indexOf("MSIE") != -1 ) {
				$(":placeholder").each(function(){
					console.log($(this));
				});
			}
		},
		init: function(){
			form.placeholder();
		}
	}
})(window.coreBp5, jQuery);


/* -----------------------------------
    $Onload
----------------------------------- */
$(function(){
	"use strict";

	var filters;

	filters = {
		'view': function () {

		},
		'zoom': function () {
			$(".size-img a").on({
				'click': function (e) {
					if ( $(this).hasClass("zoom-big") ) {
						$(this).closest(".general-list").find(".models-list").addClass("big");
					} else if ( $(this).hasClass("zoom-medium") ) {
						$(this).closest(".general-list").find(".models-list").removeClass("big");
					}

					// Off
					$(this).closest('.size-img').find(".on").removeClass('on');
					
					// On
					$(this).addClass("on");

					e.preventDefault();
				}
			});
		},
		'init': function () {
			filters.zoom();
			filters.view();
		}
	}

	filters.init();
});
