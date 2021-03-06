$(document).ready(function () {

    // open youtube video
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
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')});
    });
});