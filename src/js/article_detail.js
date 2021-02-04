$(document).ready(function () {

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