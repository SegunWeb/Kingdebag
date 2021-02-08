$(document).ready(function(){

    // slider
    $('.slider_img').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.3,
                }
            },
        ]
    });


    // block info for slider

    $('div[data-id]').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        console.log(id)
        $(`#${id}`).fadeIn(300);

        if ($(window).width() <= '576') {
            $('.slider_rich').addClass('act_fixed')
        }
    });

    $('.slider_item_info_close, #slide_five').click( function (){

        $('.slider_item_info_box').fadeOut(300);
        if ($('.slider_rich').hasClass('act_fixed')) {
            $('.slider_rich').removeClass('act_fixed')
        }
    });




    $('.slider_info_wrap').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.3,
                }
            },
        ]

    });

    $('.slider_goals').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });




});



