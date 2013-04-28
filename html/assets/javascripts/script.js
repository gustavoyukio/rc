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
var map, mapCanvas,myOptions, address, addr, geocoder, myLatlng, mapOptions;

function markerIn(address) {
    $(address).each(function (i) {
        addr = address[i];
        console.log(addr);

        geocoder = new google.maps.Geocoder();

        geocoder.geocode( { 'address': addr}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                // map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    icon: "http://localhost/lexa/rc/html/assets/images/icon-marker.png",
                    map: map,
                    position: results[0].geometry.location,
                    title: 'Alésquis Pro'
                });

                map.setZoom(15);

            } else {
                alert('Geocode não funcionou corretamente : ' + status);
            }
        });
    });
}

$(function(){
    "use strict";

    var filters;

    filters = {
        'maps': {
            'init': function (lat,lon) {
                if ( ! $("#map_canvas") )  {
                    $("footer").after($("</div>").attr("id", "map_canvas"));   
                }

                // Reset
                $("#map_canvas").html("");
                
                // Contructor
                myLatlng = new google.maps.LatLng(lat, lon);
                myOptions = {
                    zoom: 18,
                    center: myLatlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    draggable: true,
                    mapTypeControl: false,
                    navigationControl : true
                }
                map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

                // Endereços
                addr = ["Aclimação, São Paulo", "Rua Treze de Maio, 1947, São Paulo"];

                markerIn(addr);

                // 
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
