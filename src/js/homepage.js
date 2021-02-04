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
        $('.active_video').show(300)
    });
    $('.close_video').click(function () {
        $('.active_video').hide(300);
    });
    $(document).on('click', '.close_video', function(){
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
    });
});










