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
    $("helo").clickToggle(
        function() {
            $('.target3').addClass('undefined');
        },
        function() {
            $('.target3').removeClass('undefined');
        });
})()

//Function Number 2
undefined

    //Function Number 3
    (function() {
        $("asdfghj").click(function() {
            let stateSelection = "block";
            $("asdfghj").css("display", stateSelection);
        });
    })()