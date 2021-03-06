$(document).ready(function(){

    // youtube video show

    $('span[data-play]').click(function () {
        let id = $(this).data('play');

        const popupIframe = $(`#${id}`).find("iframe")[0];
        $(`#${id}`).fadeIn(200);
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    $('.close_video').click(function () {
        $('.active_video').hide(100);
    });
    $(document).on('click', '.close_video', function(){
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')});
    });

    // slider fade

    $('.slider_goals').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


});



