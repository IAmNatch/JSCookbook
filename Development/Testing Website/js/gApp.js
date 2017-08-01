$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 100&& y <180) {
        let stateSelection = "block";
        $("#tt-target3").css("display", stateSelection);
    }
    else {
        $( "#tt-target3" ).css('display', 'none');
    }
});
