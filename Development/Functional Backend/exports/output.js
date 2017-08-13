jQuery.fn.clickToggle = function(a,b) {
            function cb(){ [b,a][this._tog^=1].call(this); }
            return this.on("click", cb);
        };
$( "#iamlexi" ).clickToggle(
            function() {
let stateSelection = "block";
                                $("#tt-target1").css("display", stateSelection);
}, function() {
$( "#tt-target1" ).css('display', 'none');
});