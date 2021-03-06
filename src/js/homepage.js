$(document).ready(function () {

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

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        let act = $(this);
        $('a[data-slide]').removeClass('business_act');
        act.addClass('business_act');
        $('.slider_graph').slick('slickGoTo', slideno - 1);
    });

    $('.button_play').click(function () {

        const popupIframe = $('.active_video').find("iframe")[0];
        $('.active_video').show(200)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    });
    $('.close_video').click(function () {
        $('.active_video').hide(100);
    });
    $(document).on('click', '.close_video', function(){
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
    });


    $('#button-1').click(function () {
        if ($('.checkbox').is(':checked')){
            $('#in_2019').show(300);
            $('#in_2020').hide(300);

        } else {
            $('#in_2019').hide(300);
            $('#in_2020').show(300);
        }
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










