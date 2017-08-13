(function (){
jQuery.fn.clickToggle = function(a,b) {
            function cb(){ [b,a][this._tog^=1].call(this); }
            return this.on("click", cb);
        };
$( "#class-target1" ).clickToggle(
            function() {
$('#class-target1').addClass('drop-shadow');
}, function() {
$('#class-target1').removeClass('drop-shadow');
});
})()