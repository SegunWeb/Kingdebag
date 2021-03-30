$(document).ready(function () {

    $(window).scroll(function() {
        $('video').each(function() {
            if ($(this).visible(true)) {
                let source = $(this).data('source');
                $(this)[0].play();

                if($(this).children().length === 0) {
                    $(this).append('<source  src='+source+' type="video/mp4" />');
                }
            } else {
                $(this)[0].pause();
            }
        })
    });

    // block info for slider

    $('span[data-id]').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        console.log(id)
        $(`#${id}`).fadeIn(300);

        $('.mission').addClass('act_fixed');


    });

    $('.slider_item_info_close').click( function (){

        $('.slider_item_info_box').fadeOut(300);
        if ($('.mission').hasClass('act_fixed')) {
            $('.mission').removeClass('act_fixed')

        }
    });

    $('.slider_info_wrap').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1370,
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










