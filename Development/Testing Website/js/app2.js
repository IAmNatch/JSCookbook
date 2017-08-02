jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on('click', cb);
};

$(window).on('load', function() {
    $('#tt-target4').wrap('<div class="hidden"></div>');
    $('.hidden').css('overflow', 'hidden');

    let startHeight = $('#tt-target4').css('height');
    $('#tt-target4').css('top', '-' + startHeight);
});

$( '#tt-trigger4' ).clickToggle(
    function() {
        let h = $('#tt-target4').css('height');
        $('#tt-target4').css('top', '0px');
    }, function() {
        let h = $('#tt-target4').css('height');
        $('#tt-target4').css('top', '-' + h);
    });

$(window).on('load', function() {
    $('#class-target1').addClass('drop-shadow')
});
