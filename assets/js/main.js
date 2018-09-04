jQuery(document).ready(function ($) {


    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function () {

        $('.level-bar-inner').each(function () {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });
    });

    var open = false;

    $('svg#toggle-btn').click(function () {
        if (!open) {
            $('#nav-items-mobile').addClass("open");
            open = true;
        } else {
            $('#nav-items-mobile').removeClass("open");
            open = false;
        }
    });

    $(window).resize(function () {
        if (open) {
            $('#nav-items-mobile').removeClass("open");
            open = false;
        }
    });
});