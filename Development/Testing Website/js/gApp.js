//Created with My JSCookbook 
//Keep On hacking! 

//Function Number 1
(function() {
    jQuery.fn.clickToggle = function(a, b) {
        function cb() {
            [b, a][this._tog ^= 1].call(this);
        }
        return this.on("click", cb);
    };
    $("#tt-trigger1").clickToggle(
        function() {
            let stateSelection = "block";
            $("#tt-target1").css("display", stateSelection);
        },
        function() {
            $("#tt-target1").css('display', 'none');
        });
})()