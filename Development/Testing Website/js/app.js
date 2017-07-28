// This is a custom click toggle. It needs to be added for
//certain fucntions, but only once.
jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on('click', cb);
};

//Records State of the target element.
let myClassState = $('.tt-target1').css('display');

//The actual onClick Function. Display none to Display: whatever it used to be.
$( '.tt-button1' ).clickToggle(
    function() {
        //
        console.log(myClassState)
        $('.tt-target1').css('display', 'none');
    }, function() {
        $('.tt-target1').css('display', myClassState);
    });
