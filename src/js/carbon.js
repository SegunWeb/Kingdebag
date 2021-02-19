$(document).ready(function(){

    // youtube video show

    $('span[data-play]').click(function () {
        let id = $(this).data('play');
        console.log(id)
        $(`#${id}`).fadeIn(300);
    });
    $('.close_video').click(function () {
        $('.active_video').hide(300);
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



