let myClassState = $('.target1').css('display');


// This is a custom click toggle. It needs to be added for
//certain fucntions, but only once.
jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on('click', cb);
};

//
$( '.button1' ).clickToggle(
    function() {
        //
        console.log(myClassState)
        $('.target1').css('display', 'none');
    }, function() {
        $('.target1').css('display', myClassState);
    });
