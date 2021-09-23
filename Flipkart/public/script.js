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
        mouseDrag: false,
        touchDrag: false,
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
        mouseDrag: false,
        touchDrag: false,
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

    $(window).scroll(function(){
        if(scrollY > 150) {
            $('header').addClass('shadow-lg');
        } else {
            $('header').removeClass('shadow-lg');
        }
    });

    // dropdown hovers
    $('.userDropDown').hover(function(){
        $('.userDropDownMenu').toggleClass('active');
    }, function() {
        $('.userDropDownMenu').toggleClass('active');
    });

    $('.moreDropDown').hover(function(){
        $('.moreDropDownMenu').toggleClass('active');
    }, function() {
        $('.moreDropDownMenu').toggleClass('active');
    });

    $('.userDropDownMenu').hover(function(){
        $(this).addClass('active');
    }, function() {
        $(this).toggleClass('active');
    });

    $('.moreDropDownMenu').hover(function(){
        $(this).addClass('active');
    }, function() {
        $(this).toggleClass('active');
    });
    // dropdown hovers




    // js-image-zoom effect
    // var zoom_img = document.querySelector('.zoomimg');
    // var options = {
    //     width: 300,
    //     zoomWidth: 600,
    //     // scale: 0.5,
    //     // zoomStyle: 'height:500px;width:12000px;border-radius:2px;',
    //     // zoomLensStyle: 'opacity: 0.3;height: 10px;width: 20px;background-color: black;',
    //     offset: {vertical: 20, horizontal: 30}
    //     // zoomPosition: 'right',
    //     // zoomContainer: document.querySelector('.zoomimg')
    // };
    // new ImageZoom(document.querySelector('.image-box'), options);

});