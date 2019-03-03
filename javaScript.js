/**
 * Created by Niki on 16/08/2016.
 */

function sidenavHeight() {
    if ($(window).width() >= 974) {
        if ($('#contact').is(":visible")) {
            $("#parent").css("padding-right", "17px");
        }

        if ($('#parent').height() <= $(window).height()) {
            $(".sidenav").css("height", $(window).height());
            $(".sidenav").css("padding-bottom", "0px");
            $(".sidenav").css("margin-bottom", "0px");
        } else {
            $(".sidenav").css("padding-bottom", "99999px");
            $(".sidenav").css("margin-bottom", "-99999px");
        }
    } else {
        $(".sidenav").css("height", "auto");
        $(".sidenav").css("margin-bottom", "0px");
        $(".sidenav").css("padding-bottom", "50px");
        $("#parent").css("padding-right", "0px");
    }
}

$(function () {
    sidenavHeight();
});

$(window).resize(sidenavHeight);
