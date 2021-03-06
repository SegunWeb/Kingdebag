

$(document).ready(function(){
    //Check to see if the window is top if not then display button

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back_to_top').addClass("back_to_top-show");
        } else {
            $('.back_to_top').removeClass("back_to_top-show");
        }
    });
    //Click event to scroll to top
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // slider
    $('.slider_graph').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        infinite: true,
        speed: 100,
        cssEase: 'linear'
    });

    $('.graph_menu_list a:first').addClass('business_act');

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        let act = $(this);
        $('a[data-slide]').removeClass('business_act');
        act.addClass('business_act');
        $('.slider_graph').slick('slickGoTo', slideno - 1);
    });

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

    // open youtube video
    //planet page
    $('#btn_one').click(function () {
        const popupIframe = $('#perform_box').find("iframe")[0];
        $('#perform_box').show(200);
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    $('#btn_two').click(function () {
        const popupIframe = $('#left_box').find("iframe")[0];
        $('#left_box').show(200);
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    $('#btn_three').click(function () {
        const popupIframe = $('#right_box').find("iframe")[0];
        $('#right_box').show(200)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    //global page
    $('#global_one').click(function () {
        const popupIframe = $('#global_video_one').find("iframe")[0];
        $('#global_video_one').show(200)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    $('#for_global').click(function () {
        const popupIframe = $('#global_video').find("iframe")[0];
        $('#global_video').show(200)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    //completing page
    $('#completing_one').click(function () {
        const popupIframe = $('#completing_video').find("iframe")[0];
        $('#completing_video').show(200)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    $('#completing_two').click(function () {
        const popupIframe = $('#comp_video').find("iframe")[0];
        $('#comp_video').show(200)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

    $('.close_video').click(function () {
        $('.active_video').hide(100);
    });
    $(document).on('click', '.close_video', function(){
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')});
    });

    // slider - map business page
    $('.slider_map').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        infinite: true,
        speed: 100,
        cssEase: 'linear'
    });

    $('.plans_year > .plans_year_info:nth-child(2) a').addClass('map_act');

    $('a[data-slide-year]').click(function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide-year');
        let act = $(this);
        $('a[data-slide-year]').removeClass('map_act');
        act.addClass('map_act');
        $('.slider_map').slick('slickGoTo', slideno - 1);
    });

    $('.plans_map_place_close').click(function () {
        $('.plans_map_place_box').hide(300)
    })

    // block info for slider business page
    $('div[data-id] , span[data-id]').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        if(id === "four" || id === "one" ) {
            $(`#${id}`).fadeIn(300);
            if ($(window).width() <= '576') {
                $('.slider_biz_strategy').addClass('act_fixed')
            }
        }
        return false


    });

    $('.slider_item_info_close, #slide_five').click( function (){

        $('.slider_item_info_box').fadeOut(300);
        if ($('.slider_biz_strategy').hasClass('act_fixed')) {
            $('.slider_biz_strategy').removeClass('act_fixed')
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

    $(window).scroll(function() {
        $('video').each(function() {
            if ($(this).visible(true)) {
                $(this)[0].play();
            } else {
                $(this)[0].pause();
            }
        })
    });

});

