$(document).ready(function(){
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


