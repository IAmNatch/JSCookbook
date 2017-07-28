// This is a custom click toggle. It needs to be added for
//certain fucntions, but only once.
jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on('click', cb);
};

//Records State of the target element.
let myClassState = $('#tt-target1').css('display');

//The actual onClick Function. Display none to Display: whatever it used to be.
$( '#tt-trigger1' ).clickToggle(
    function() {
        //
        console.log(myClassState)
        $('#tt-target1').css('display', 'none');
    }, function() {
        $('#tt-target1').css('display', myClassState);
    });

$('#tt-trigger2').on({
    'mouseenter':function(){
        $('#tt-target2').css('display', 'none')
    },'mouseleave':function(){
        $('#tt-target2').css('display', myClassState)
    }
});
