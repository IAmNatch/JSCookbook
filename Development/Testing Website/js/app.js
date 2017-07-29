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

// TT Popup on hover
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
    $('.scroll-position').text($(this).scrollTop());
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 100 && y < 180 ) {
        $('#tt-target3').fadeIn();
    }
    else {
        $('#tt-target3').fadeOut();
    }
});


// Tooltip Dropdown on Click
$( '#tt-trigger4' ).clickToggle(
    function() {
        let h = $('#tt-target4').css('height');
        $('#tt-target4').css('top', '0px');
    }, function() {
        let h = $('#tt-target4').css('height');
        $('#tt-target4').css('top', '-' + h);
    });

// Tooltip Dropdown Hover
$('#tt-trigger5').on({
    'mouseenter':function(){
        let h = $('#tt-target4').css('height');
        $('#tt-target5').css('top', '0px');
    },'mouseleave':function(){
        let h = $('#tt-target4').css('height');
        $('#tt-target5').css('top', '-' + h);
    }
});

//Tooltip Dropdown on Hover

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200) {
        let h = $('#tt-target6').css('height');
        $('#tt-target6').css('top', '0px');
    } else {
        let h = $('#tt-target6').css('height');
        $('#tt-target6').css('top', '-' + h);
    }
});
