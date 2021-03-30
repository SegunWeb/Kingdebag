$(document).ready(function(){

    // slider
    $('.slider_img').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.3,
                }
            },
        ]
    });


    // block info for slider

    $('div[data-id] , p[data-id]').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        if(id === "three" ) {
            $(`#${id}`).fadeIn(300);
            if ($(window).width() <= '576') {
                $('.slider_rich').addClass('act_fixed')
            }
        }
        return false

    });

    $('.slider_item_info_close, #slide_five').click( function (){

        $('.slider_item_info_box').fadeOut(300);
        if ($('.slider_rich').hasClass('act_fixed')) {
            $('.slider_rich').removeClass('act_fixed')
        }
    });

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


    $('.slider_info_wrap').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.3,
                }
            },
        ]

    });

    $('.slider_goals').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // animation buble

    $("#d_five").addClass('act_buble');

    $('#b-two').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_two").addClass('act_buble');

        $(this).animate({left: "377", top: "65"},{duration:200});
        $( "#b-four" ).animate({left: "184", bottom: "25"},{duration:200});
        $( "#b-five" ).animate({right: "294", bottom: "233"},{duration:200});


        if ($(window).width() <= '1580') {
            $(this).animate({left: "320", top: "132"},{duration:200});
            $( "#b-four" ).animate({left: "120", bottom: "-5"},{duration:200});
            $( "#b-five" ).animate({right: "230", bottom: "195"},{duration:200});

        }


        if ($(window).width() <= '992') {
            $(this).animate({left: "300", top: "130"},{duration:100});
            $( "#b-four" ).animate({left: "130", bottom: "5"},{duration:100});
            $( "#b-five" ).animate({right: "250", bottom: "195"},{duration:100});

        }
        if ($(window).width() <= '576') {
            $(this).animate({left: "168", top: "115"},{duration:100});
            $( "#b-four" ).animate({left: "35", bottom: "20"},{duration:100});
            $( "#b-five" ).animate({right: "135", bottom: "165"},{duration:100});

        }
    });


    $('#b-four').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_four").addClass('act_buble');

        $(this).animate({left: "404", bottom: "195"},{duration:200});
        $( "#b-two" ).animate({left: "200", top: "-97"},{duration:200});
        $( "#b-five" ).animate({right: "252", bottom: "10"},{duration:200});


        if ($(window).width() <= '1580') {
            $(this).animate({left: "317", bottom: "150"},{duration:200});
            $( "#b-two" ).animate({left: "134", top: "20"},{duration:200});
            $( "#b-five" ).animate({right: "235", bottom: "-26"},{duration:200});
        }
        if ($(window).width() <= '992') {
            $(this).animate({left: "295", bottom: "151"},{duration:100});
            $( "#b-two" ).animate({left: "99", top: "20"},{duration:100});
            $( "#b-five" ).animate({right: "217", bottom: "-31"},{duration:100});
        }
        if ($(window).width() <= '576') {
            $(this).animate({left: "159", bottom: "113"},{duration:100});
            $( "#b-two" ).animate({left: "26", top: "45"},{duration:100});
            $( "#b-five" ).animate({right: "140", bottom: "2"},{duration:100});
        }
    })


    $('#b-five').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_five").addClass('act_buble');

        $(this).animate({right: "0", bottom: "150"},{duration:200});
        $( "#b-two" ).animate({left: "10", top: "50"},{duration:200});
        $( "#b-four" ).animate({left: "175", bottom: "0"},{duration:200});

        if ($(window).width() <= '1580') {
            $(this).animate({right: "0", bottom: "115"},{duration:200});
            $( "#b-two" ).animate({left: "10", top: "110"},{duration:200});
            $( "#b-four" ).animate({left: "120", bottom: "-5"},{duration:200});
        }

        if ($(window).width() <= '576') {
            $(this).animate({right: "0", bottom: "60"},{duration:100});
            $( "#b-two" ).animate({left: "30", top: "59"},{duration:100});
            $( "#b-four" ).animate({left: "12", bottom: "-5"},{duration:100});
        }
    })

    $(window).scroll(function() {
        $('video').each(function() {
            if ($(this).visible(true)) {
                let source = $(this).data('source');
                $(this)[0].play();

                if($(this).children().length === 0) {
                    $(this).append('<source  src='+source+' type="video/mp4" />');
                }
            } else {
                $(this)[0].pause();
            }
        })
    });

    // block info for slider
    $('a[data-id]').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        console.log(id)
        $(`#${id}`).fadeIn(300);

        if ($(window).width() <= '768') {
            $('.renov_space').addClass('act_fixed')
        }
    });

    $('.slider_item_info_close').click( function (){

        $('.slider_item_info_box').fadeOut(300);
        if ($('.renov_space').hasClass('act_fixed')) {
            $('.renov_space').removeClass('act_fixed')
        }
    });



    $('.slider_info_wrap').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.3,
                }
            },
        ]

    });




});



