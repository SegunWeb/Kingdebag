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
        let popupIframe = $(`#${btnPlay}`).find(".video_size");
        popupIframe.append('<iframe src="https://www.youtube.com/embed/'+ btnPlay +'?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

        $(`#${btnPlay}`).show(100);
        let popup = $(`#${btnPlay}`).find("iframe")[0];
        setTimeout(() => {
            popup.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }, 800)
    });
    $('.close_video').click(function () {
        let btnPlay = $(this).parent().attr("id");
        let popupIframe = $(`#${btnPlay}`).find("iframe");
        popupIframe.remove();
        $('.active_video').hide(100);
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