$(document).ready(function () {

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
});