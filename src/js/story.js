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

    $('div[data-id]').click(function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        console.log(id)
        $(`#${id}`).fadeIn(300);

        if ($(window).width() <= '576') {
            $('.slider_rich').addClass('act_fixed')
        }
    });

    $('.slider_item_info_close, #slide_five').click( function (){

        $('.slider_item_info_box').fadeOut(300);
        if ($('.slider_rich').hasClass('act_fixed')) {
            $('.slider_rich').removeClass('act_fixed')
        }
    });




    $('.slider_info_wrap').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
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

    $('.slider_goals').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // animation buble

    $("#d_five").addClass('act_buble');

    $('#b-one').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_one").addClass('act_buble');


        $(this).animate({left: "406", top: "245"},{duration:200});
        $( "#b-two" ).animate({left: "205", top: "350"},{duration:200});
        $( "#b-four" ).animate({left: "315", bottom: "353"},{duration:200});
        $( "#b-five" ).animate({right: "340", bottom: "185"},{duration:200});
        $( "#b-three" ).animate({left: "0", bottom: "27"},{duration:200});

        if ($(window).width() <= '1580') {
            $(this).animate({left: "330", top: "180"},{duration:200});
            $( "#b-two" ).animate({left: "160", top: "267"},{duration:200});
            $( "#b-four" ).animate({left: "285", bottom: "288"},{duration:200});
            $( "#b-five" ).animate({right: "274", bottom: "165"},{duration:200});
            $( "#b-three" ).animate({left: "0", bottom: "21"},{duration:200});
        }
        if ($(window).width() <= '992') {
            $(this).animate({left: "308", top: "180"},{duration:200});
            $( "#b-two" ).animate({left: "140", top: "267"},{duration:200});
            $( "#b-four" ).animate({left: "258", bottom: "288"},{duration:200});
            $( "#b-five" ).animate({right: "258", bottom: "165"},{duration:200});
            $( "#b-three" ).animate({left: "0", bottom: "21"},{duration:200});
        }
        if ($(window).width() <= '576') {
            $(this).animate({left: "175", top: "180"},{duration:200});
            $( "#b-two" ).animate({left: "81", top: "250"},{duration:200});
            $( "#b-four" ).animate({left: "170", bottom: "187"},{duration:200});
            $( "#b-five" ).animate({right: "144", bottom: "165"},{duration:200});
            $( "#b-three" ).animate({left: "1", bottom: "63"},{duration:200});
        }
    })

    $('#b-two').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_two").addClass('act_buble');

        $(this).animate({left: "377", top: "210"},{duration:200});
        $( "#b-one" ).animate({left: "314", top: "30"},{duration:200});
        $( "#b-four" ).animate({left: "184", bottom: "25"},{duration:200});
        $( "#b-five" ).animate({right: "340", bottom: "185"},{duration:200});
        $( "#b-three" ).animate({left: "0", bottom: "27"},{duration:200});


        if ($(window).width() <= '1580') {
            $(this).animate({left: "320", top: "165"},{duration:200});
            $( "#b-one" ).animate({left: "270", top: "15"},{duration:200});
            $( "#b-four" ).animate({left: "160", bottom: "25"},{duration:200});
            $( "#b-five" ).animate({right: "274", bottom: "165"},{duration:200});
            $( "#b-three" ).animate({left: "0", bottom: "21"},{duration:200});
        }
        if ($(window).width() <= '992') {
            $(this).animate({left: "300", top: "175"},{duration:200});
            $( "#b-one" ).animate({left: "263", top: "15"},{duration:200});
            $( "#b-four" ).animate({left: "145", bottom: "25"},{duration:200});
            $( "#b-five" ).animate({right: "258", bottom: "165"},{duration:200});
            $( "#b-three" ).animate({left: "0", bottom: "21"},{duration:200});
        }
        if ($(window).width() <= '576') {
            $(this).animate({left: "169", top: "175"},{duration:200});
            $( "#b-one" ).animate({left: "175", top: "50"},{duration:200});
            $( "#b-four" ).animate({left: "68", bottom: "-27"},{duration:200});
            $( "#b-five" ).animate({right: "144", bottom: "165"},{duration:200});
            $( "#b-three" ).animate({left: "1", bottom: "63"},{duration:200});
        }
    });



    $('#b-three').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_three").addClass('act_buble');

        $(this).animate({left: "417", bottom: "165"},{duration:200});
        $( "#b-one" ).animate({left: "235", top: "303"},{duration:200});
        $( "#b-two" ).animate({left: "4", top: "348"},{duration:200});
        $( "#b-five" ).animate({right: "340", bottom: "230"},{duration:200});
        $( "#b-four" ).animate({left: "329", bottom: "309"},{duration:200});


        if ($(window).width() <= '1580') {
            $(this).animate({left: "345", bottom: "116"},{duration:200});
            $( "#b-one" ).animate({left: "192", top: "240"},{duration:200});
            $( "#b-two" ).animate({left: "8", top: "260"},{duration:200});
            $( "#b-five" ).animate({right: "250", bottom: "184"},{duration:200});
            $( "#b-four" ).animate({left: "299", bottom: "259"},{duration:200});
        }


        if ($(window).width() <= '992') {
            $(this).animate({left: "321", bottom: "116"},{duration:200});
            $( "#b-one" ).animate({left: "176", top: "240"},{duration:200});
            $( "#b-two" ).animate({left: "4", top: "268"},{duration:200});
            $( "#b-five" ).animate({right: "250", bottom: "184"},{duration:200});
            $( "#b-four" ).animate({left: "267", bottom: "242"},{duration:200});

        }

        if ($(window).width() <= '576') {
            $(this).animate({left: "176", bottom: "56"},{duration:200});
            $( "#b-one" ).animate({left: "111", top: "264"},{duration:200});
            $( "#b-two" ).animate({left: "0", top: "229"},{duration:200});
            $( "#b-five" ).animate({right: "137", bottom: "116"},{duration:200});
            $( "#b-four" ).animate({left: "178", bottom: "159"},{duration:200});
        }
    });


    $('#b-four').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_four").addClass('act_buble');

        $(this).animate({left: "404", bottom: "148"},{duration:200});
        $( "#b-one" ).animate({left: "41", top: "57"},{duration:200});
        $( "#b-two" ).animate({left: "240", top: "53"},{duration:200});
        $( "#b-three" ).animate({left: "-38", bottom: "208"},{duration:200});
        $( "#b-five" ).animate({right: "252", bottom: "-37"},{duration:200});


        if ($(window).width() <= '1580') {
            $(this).animate({left: "330", bottom: "107"},{duration:200});
            $( "#b-one" ).animate({left: "75", top: "30"},{duration:200});
            $( "#b-two" ).animate({left: "240", top: "25"},{duration:200});
            $( "#b-three" ).animate({left: "-38", bottom: "208"},{duration:200});
            $( "#b-five" ).animate({right: "252", bottom: "-37"},{duration:200});
        }
        if ($(window).width() <= '992') {
            $(this).animate({left: "308", bottom: "110"},{duration:200});
            $( "#b-one" ).animate({left: "58", top: "31"},{duration:200});
            $( "#b-two" ).animate({left: "215", top: "25"},{duration:200});
            $( "#b-three" ).animate({left: "-47", bottom: "180"},{duration:200});
            $( "#b-five" ).animate({right: "217", bottom: "-31"},{duration:200});
        }
        if ($(window).width() <= '576') {
            $(this).animate({left: "166", bottom: "54"},{duration:200});
            $( "#b-one" ).animate({left: "38", top: "32"},{duration:200});
            $( "#b-two" ).animate({left: "153", top: "45"},{duration:200});
            $( "#b-three" ).animate({left: "-2", bottom: "110"},{duration:200});
            $( "#b-five" ).animate({right: "140", bottom: "-62"},{duration:200});
        }
    })


    $('#b-five').click(function () {
        $('.buble_rich_desc').removeClass('act_buble');
        $("#d_five").addClass('act_buble');

        $(this).animate({right: "0", bottom: "115"},{duration:200});
        $( "#b-one" ).animate({left: "200", top: "0"},{duration:200});
        $( "#b-two" ).animate({left: "10", top: "160"},{duration:200});
        $( "#b-three" ).animate({left: "0", bottom: "25"},{duration:200});
        $( "#b-four" ).animate({left: "190", bottom: "0"},{duration:200});

        if ($(window).width() <= '1580') {
            $(this).animate({right: "0", bottom: "114"},{duration:200});
            $( "#b-one" ).animate({left: "148", top: "0"},{duration:200});
            $( "#b-two" ).animate({left: "10", top: "110"},{duration:200});
            $( "#b-three" ).animate({left: "0", bottom: "25"},{duration:200});
            $( "#b-four" ).animate({left: "156", bottom: "0"},{duration:200});
        }

        if ($(window).width() <= '576') {
            $(this).animate({right: "0", bottom: "52"},{duration:200});
            $( "#b-one" ).animate({left: "140", top: "17"},{duration:200});
            $( "#b-two" ).animate({left: "30", top: "59"},{duration:200});
            $( "#b-three" ).animate({left: "-2", bottom: "65"},{duration:200});
            $( "#b-four" ).animate({left: "65", bottom: "-39"},{duration:200});
        }
    })
});



