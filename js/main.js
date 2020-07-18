$(window).ready(function () {
    $("#menuToggle i").click(function () {
        $("#menuContent").slideToggle().css({
            cursor: "poiner"
        });
    });
});
