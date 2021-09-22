$(document).ready(function() {

    $('#banner.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        items: 1,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false
    });

    $('#topSelection .owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            768:{
                items:4,
            },
            1000:{
                items:7,
            }
        }
    });

    $('#recommended .owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            768:{
                items:4,
            },
            1000:{
                items:6,
            }
        }
    });

});