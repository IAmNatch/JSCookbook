$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 300&& y <600) {
        $('#class-target1').addClass('drop-shadow');
    }
    else {
        $('#class-target1').removeClass('drop-shadow');
    }
});


// Don't Touch!
$(document).scroll(function () {
    $('.scroll-pos').text($(this).scrollTop());
});
