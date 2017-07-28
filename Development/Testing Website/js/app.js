// This is a custom click toggle. It needs to be added for
//certain fucntions, but only once.
jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on('click', cb);
};

//Records State of the target element.
let myClassState = 'block';

//The actual onClick Function. Display none to Display: whatever it used to be.
$( '#tt-trigger1' ).clickToggle(
    function() {
        $('#tt-target1').css('display', myClassState);
    }, function() {
        $('#tt-target1').css('display', 'none');
    });

$('#tt-trigger2').on({
    'mouseenter':function(){
        $('#tt-target2').css('display', myClassState)
    },'mouseleave':function(){
        $('#tt-target2').css('display', 'none')
    }
});

//Tooltip on Scroll
//Show's Current Scroll Positon
$(document).scroll(function () {
    $('#scroll-position').text($(this).scrollTop());
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 100) {
        $('#tt-target3').fadeIn();
    } else {
        $('#tt-target3').fadeOut();
    }
});
