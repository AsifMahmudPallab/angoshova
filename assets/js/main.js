(function($){
    "use strict";
    
/* banner activation */
$(document).ready(function(){
    var slider = $('.banner-carousel');

    slider.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplaySpeed:4000,
            mouseDrag:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    })



    /* 02: Background image
    ==============================================*/

    var bgImg = $('[data-bg-img]');

    bgImg.css('background', function(){
        return 'url(' + $(this).data('bg-img') + ') center center';
    });


    /* countr up */
    $('.counter').counterUp({});


    /* prelodar */
    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });

        /* 19: Content animation
    ==============================================*/

    $(window).on('load', function(){

        var $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
            $delay = typeof $delay === 'undefined' ? '0' : $delay ;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                   .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                   });
            }, {offset: '93%'});
        });
    });

    $(window).on('scroll', ()=>{
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 50){
            $('.nav-wraper').css('height','80px')
            $('.header-navigation').addClass('stuck fadeIn');
        }else{
            $('.header-navigation').removeClass('stuck fadeIn');
            // $('.nav-wraper').css('height','0px')
           
        }
    })

    /* light box */
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
    /* back to top */
    $(window).scroll(()=>{
        if( ($(window).scrollTop()) > ($(document).height()/4)){
            $('.backtop').addClass('show');
        }else if(($(window).scrollTop()) < ($(document).height()/4)){
         $('.backtop').removeClass('show')
        }
    })
    $('.backtop').on('click',(e)=>{
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    })

    /* md speech */
    $('.md-image').tilt({
        maxTilt:10,
        perspective:500,
    })
    

    
/*===================================================
        12: Google map
===================================================*/
    //Google Map
    if($('#map').length !==0){
            
        var googleMapSelector = $('#map');
        var latitude = $('.google-map-wrapper').attr('data-latitude');
        var longitude = $('.google-map-wrapper').attr('data-longitude');
        var zoome = $('.google-map-wrapper').attr('data-zoom');
        var zoomtoNum = Number(zoome);
        // var mapmarker = $('.google-map-wrapper').attr('data-marker');
        var myCenter = new google.maps.LatLng(latitude, longitude);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: zoomtoNum,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f7f1e0"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#d0e3b4"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.medical",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fbd3da"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#bde6ab"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffe36f"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#efd151"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "black"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#cfb2db"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a2daf2"
                                }
                            ]
                        }
                    ]
            };
            var map = new google.maps.Map( document.getElementById('map'), mapProp );
            var marker = new google.maps.Marker({
                position: myCenter,
                // icon: mapmarker,
            });
            marker.setMap(map);

           
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }   
        

  

})($)


            