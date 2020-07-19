$(function () {
    menu = $('#menuContent');

    $('#menuToggle').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('#menuContent ul li').on('click', function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });
});
