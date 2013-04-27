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
        'maps': {
            'init': function (lat,lon) {
                if ( ! $("#map_canvas") )  {
                    $("footer").after($("</div>").attr("id", "map_canvas"));   
                }

                if ( $("#map_canvas div").length <= 0 ) {
                    var mapCanvas = $("#map_canvas");
                    var mapOptions = {
                        center: new google.maps.LatLng(lat, lon),
                        zoom: 14,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                }

                $("#mapbox").addClass('on');

                filters.maps.close();
            },
            'close': function () {
                $("#mapbox .close").on({
                    'click': function (e) {
                        $("#mapbox").fadeOut(200, function() {
                            $(this).removeClass('on');
                        });

                        e.preventDefault();
                    }
                });
            }
        },
        'gps': function () {
            $(".gps").on({
                'click': function (e) {
                    navigator.geolocation.getCurrentPosition(function(gps) {
                        // console.dir(gps);

                        var lat = gps.coords.latitude;
                        var lon = gps.coords.longitude;

                        filters.maps.init(lat, lon);
                    });

                    e.preventDefault();
                }
            });
        },
        'view': function () {
            $(".formats a").on({
                'click': function (e) {
                    if ( $(this).hasClass('icon-list') ) {
                        $(this).closest(".general-list").find(".models-list").addClass("list");
                    } else if ( $(this).hasClass('icon-table') ) {
                        $(this).closest(".general-list").find(".models-list").removeClass("list")
                    }

                    // Off
                    $(this).closest('.formats').find(".on").removeClass('on');
                    
                    // On
                    $(this).addClass("on");

                    e.preventDefault();
                }
            });
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
            filters.gps();
            filters.zoom();
            filters.view();
        }
    }

    filters.init();
});
