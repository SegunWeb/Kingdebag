$(document).ready(function () {
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


    $('span[data-id]').click(function(e) {
        e.preventDefault();
        let btnPlay = $(this).data('id');
        const popupIframe = $(`#${btnPlay}`).find("iframe")[0];
        $(`#${btnPlay}`).show(300)
        popupIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    });
    $('.close_video').click(function () {
        $('.active_video').hide(300);
    });
    $(document).on('click', '.close_video', function(){
        jQuery("iframe").each(function() {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
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