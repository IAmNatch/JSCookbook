// OnClick Breakdown

// JQuery ToggleClick
    jQuery.fn.clickToggle = function(a,b) {
        function cb(){ [b,a][this._tog^=1].call(this); }
        return this.on('click', cb);
    };

// Click Function
    // Starts Click Toggle and first Function
    $( '#tt-trigger1' ).clickToggle(
        function() {
        //First Function
            $('#tt-target1').css('display', myClassState);
        //Starts second Function
        }, function() {
        //Second Function
            $('#tt-target1').css('display', 'none');
        //End's Click Toggle
        });

// Hover Function
    // Starts Hover
    $('#tt-trigger2').on({
        'mouseenter':function(){
    //First Function
            $('#tt-target2').css('display', myClassState)
    //Starts Second Function
        },'mouseleave':function(){
    //Second Function
            $('#tt-target2').css('display', 'none')
    //Ends Hover
        }
    });

// Scroll Function
    // Hover Starts
    $(document).scroll(function () {
        let y = $(this).scrollTop();
    // Declare top and bottom win condition;
        if (y > 100 && y < 180 ) {
    // First Function
            $('#tt-target3').fadeIn();
    // Starts Second Function
        }
        else {
    // Second Function
            $('#tt-target3').fadeOut();
    // End Function
        }
    });

// Dropdown on Click;
    // Create Wrapper and Start hidden
    $(window).on('load', function() {
        $('#tt-target4').wrap('<div class="hidden"></div>');
        $('.hidden').css('overflow', 'hidden');

        let startHeight = $('#tt-target4').css('height');
        $('#tt-target4').css('top', '-' + startHeight);
    });

    // Start Click Toggle
    $( '#tt-trigger4' ).clickToggle(
        function() {
    // Function
            let h = $('#tt-target4').css('height');
            $('#tt-target4').css('top', '0px');
    // Second Function Start
        }, function() {
    // Second Function
            let h = $('#tt-target4').css('height');
            $('#tt-target4').css('top', '-' + h);
    // End Toggle
        });
