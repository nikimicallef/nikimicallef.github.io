/**
 * Created by Niki on 16/08/2016.
 */

function contactButtonPress() {
    $("#topTable").fadeOut(500);
    $("#bottomTable").fadeOut(500,function(){
        $("#contact").fadeIn(500);
        if($(window).width() >= 974) {
            $("#parent").css("padding-right", "17px");
        }
        sidenavHeight();
    });

    document.getElementById("navLeft").style.color="#DCDCDC";
    document.getElementById("navRight").style.color="#424242";
}

function resumeButtonPress() {
    $("#contact").fadeOut(500,function(){
        $("#topTable").fadeIn(500);
        $("#bottomTable").fadeIn(500);
        $("#parent").css("padding-right", "0px");
        sidenavHeight();
    });

    document.getElementById("navLeft").style.color="#424242";
    document.getElementById("navRight").style.color="#DCDCDC";
}

function sidenavHeight() {
    if($(window).width() >= 974) {
        if($('#contact').is(":visible")){
            $("#parent").css("padding-right", "17px");
        }

        if($('#parent').height() <= $(window).height()){
            $(".sidenav").css("height",$(window).height());
            $(".sidenav").css("padding-bottom","0px");
            $(".sidenav").css("margin-bottom","0px");
        } else {
            $(".sidenav").css("padding-bottom","99999px");
            $(".sidenav").css("margin-bottom","-99999px");
        }
    } else {
        $(".sidenav").css("height","auto");
        $(".sidenav").css("margin-bottom","0px");
        $(".sidenav").css("padding-bottom","50px");
        $("#parent").css("padding-right", "0px");
    }
}

$(function(){
    sidenavHeight();
});

$(window).resize(sidenavHeight);