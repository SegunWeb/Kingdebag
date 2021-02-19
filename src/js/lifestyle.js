$(document).ready(function(){

    // slider
    $('.slider_img').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 991,
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
        let elSrc = $(`#${id}`).find(".slide_img").attr('src');
        let videoSrc = $(`#${id}`).find(".video > source").attr('src');


        $(`#${id}`).fadeIn(300);
        if ($(window).width() <= '576') {
            $('.slider_rich').addClass('act_fixed')
        }
        if(elSrc.length == 0) {
            $(`#${id}`).find(".slide_img").hide()
        }
        if(videoSrc.length == 0) {
            $(`#${id}`).find(".video").hide()
        }
    });
    $('.slider_item_info_close').click( function (){
        $('.slider_item_info_box').fadeOut(300);
        if ($('.slider_rich').hasClass('act_fixed')) {
            $('.slider_rich').removeClass('act_fixed')
        }
        $(".video").trigger('pause');
    });

    $('.slider_info_wrap').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
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


});



