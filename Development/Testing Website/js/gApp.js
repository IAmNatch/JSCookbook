$( "#class-target1" ).click(function() {
$('#class-target1').addClass('drop-shadow');
});

// Don't Touch!
$(document).scroll(function () {
    $('.scroll-pos').text($(this).scrollTop());
});
