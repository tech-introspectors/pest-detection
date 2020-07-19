//$(function () {
//    menu = $('#menuContent');
//
//    $('#button').on('click', function (e) {
//        e.preventDefault();
//        $(this).css("cursor", "pointer");
//        menu.slideToggle();
//    });
//
//    $(window).resize(function () {
//        var w = $(this).width();
//        if (w > 480 && menu.is(':hidden')) {
//            menu.removeAttr('style');
//        }
//    });
//
//    $('#menuContent ul li').on('click', function (e) {
//        var w = $(window).width();
//        if (w < 480) {
//            menu.slideToggle();
//        }
//    });
//});
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
