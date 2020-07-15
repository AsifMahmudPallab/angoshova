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
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn',
            // autoplaySpeed:6000,
            mouseDrag:true,
            // autoplay: true,
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
        console.log(scrollTop)
        if(scrollTop > 50){
            $('.nav-wraper').css('height','80px')
            $('.header-navigation').addClass('stuck fadeIn');
        }else{
            $('.header-navigation').removeClass('stuck fadeIn');
            // $('.nav-wraper').css('height','0px')
           
        }
    })




})($)


            