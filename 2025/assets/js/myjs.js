/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function myFunction(this_div) {
    var dots = document.getElementById(this_div + "_dots");
    var moreText = document.getElementById(this_div + "_more");
    var btnText = document.getElementById(this_div + "_myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = 'Read more';
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = 'Read less';
        moreText.style.display = "inline";
    }
}


function adjust_times_to_venue_zone() {
    $(".workshopitem").each(function (index) {
        $(this).text(moment.tz($(this).data("needed"), "America/New_York").format("HH:mm"));
    });

    //$("#time-warning").html('All times are in <b>CEST</b>.');
    $("#time-warning").html('All times are in <b>Eastern Time (ET)</b>. Do you want to see them adjusted to your time zone (' + moment().tz(moment.tz.guess()).format('z') + ')? <a href="javascript:void(0)" onclick="adjust_times_user_time_zone();">Click here.</a>');
}

function adjust_times_user_time_zone() {
    var user_time_zone = moment.tz.guess();
    $(".workshopitem").each(function (index) {
        var adjusted_time = moment.tz($(this).data("needed"), "America/New_York").tz(user_time_zone);
        var text_displacement = '';
        var day_displacement = moment(adjusted_time.format("YYYY-MM-DD")).diff(moment($(this).data("needed")).format("YYYY-MM-DD"), 'days');
        if (day_displacement < 0) {
            text_displacement = ' (' + day_displacement + 'd)';
        } else if (day_displacement > 0) {
            text_displacement = ' (+' + day_displacement + 'd)';
        }
        $(this).text(adjusted_time.format("HH:mm") + text_displacement);
    });
    var formatted_user_time_zone = moment().tz(user_time_zone).format('z');
    if (formatted_user_time_zone != "CDT") {
        $("#time-warning").html('All times are adjusted to <b>your time zone (' + formatted_user_time_zone + ')</b>. Do you want to see times in Eastern Time (ET)? <a href="javascript:void(0)" onclick="adjust_times_to_venue_zone();">Click here.</a>');
    } else {
        $("#time-warning").html('All times are adjusted to <b>your time zone (' + formatted_user_time_zone + ')</b>.');
    }
}

//$(document).ready(function () {
//    adjust_times_user_time_zone();
//});



$(document).ready(function () {

    //adjust_times_user_time_zone();
    adjust_times_to_venue_zone()
    if (window.location.href.indexOf('#call-for-papers') != -1) {
        $('#call-for-papers').modal('show');
    }

});