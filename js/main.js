jQuery(document).ready(function($) {
    $(".js-blog-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:0,
        nav:true,
        dots:true,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        },
    });

    $(".js-menu-toggle").click(function(){
        $(this).toggleClass("activated");

        $(".js-navigation-wrap").toggleClass("navigation-displayed");
    });
});