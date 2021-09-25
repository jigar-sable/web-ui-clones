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

    // arrow dropdown rotate on hover
    $('.userDropDown').hover(function() {
        $('.userDropDown span').toggleClass('rotateDropDown');
    }, function() {
        $('.userDropDown span').toggleClass('rotateDropDown');
    });

    $('.moreDropDown').hover(function() {
        $('.moreDropDown span').toggleClass('rotateDropDown');
    }, function() {
        $('.moreDropDown span').toggleClass('rotateDropDown');
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

    $('#qtyUp').on('click',function(e){
        if($('#qtyInput').val()>=1 && $('#qtyInput').val()<=10){
            $('#qtyInput').val(function(i, oldval){
                    return ++oldval;
                });
            }
    });

    $('#qtyDown').on('click',function(){
        if($('#qtyInput').val()>=2 && $('#qtyInput').val()<=11){
            $('#qtyInput').val(function(i, qtynos){
                return --qtynos;
            })
        }
    });








    // personal info edit buttons
    $('#editPersonalBtn').click(function() {
        // change button text
        if($(this).text() == 'Edit'){
            $(this).text('Cancel');
        } else {
            $(this).text('Edit');
        }
        $('#personalSaveBtn').toggleClass('hidden');

        $('#personalInputs .inputs').toggleClass('bg-gray-100').toggleClass('cursor-not-allowed');
       
        $('#personalInputs .inputs input').toggleClass('cursor-not-allowed').toggleClass('text-gray-500');
        $('#personalInputs .inputs input').prop("disabled") ?
            $('#personalInputs .inputs input').prop('disabled', false) :
            $('#personalInputs .inputs input').prop('disabled',true)


        $('#radioInput .inputs').toggleClass('text-gray-500').toggleClass('cursor-not-allowed');
        $('#radioInput .inputs input').prop("disabled") ?
            $('#radioInput .inputs input').prop('disabled', false) :
            $('#radioInput .inputs input').prop('disabled',true)
    });
    // personal info edit buttons

    // personal info edit buttons
    $('#emailEditBtn').click(function() {
        // change button text
        if($(this).text() == 'Edit'){
            $(this).text('Cancel');
        } else {
            $(this).text('Edit');
        }
        $('#emailSaveBtn').toggleClass('hidden');

        $('#emailInputs').toggleClass('bg-gray-100').toggleClass('cursor-not-allowed');
       
        $('#emailInputs input').toggleClass('cursor-not-allowed').toggleClass('text-gray-500');
        $('#emailInputs input').prop("disabled") ?
            $('#emailInputs input').prop('disabled', false) :
            $('#emailInputs input').prop('disabled',true)
    });
    // personal info edit buttons

    // personal info edit buttons
    $('#mobEditBtn').click(function() {
        // change button text
        if($(this).text() == 'Edit'){
            $(this).text('Cancel');
        } else {
            $(this).text('Edit');
        }
        $('#mobSaveBtn').toggleClass('hidden');

        $('#mobInputs').toggleClass('bg-gray-100').toggleClass('cursor-not-allowed');
       
        $('#mobInputs input').toggleClass('cursor-not-allowed').toggleClass('text-gray-500');
        $('#mobInputs input').prop("disabled") ?
            $('#mobInputs input').prop('disabled', false) :
            $('#mobInputs input').prop('disabled',true)
    });
    // personal info edit buttons

});