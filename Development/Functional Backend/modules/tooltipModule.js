let tooltip = {

    toolTipGenerator(inputObject) {
        //Testing
        console.log('tooltip module ran!');
        //Code
        const trigger = inputObject.input.triggerID;
        const target = inputObject.input.targetID;

        if (inputObject.input.functionSubType === 'tooltip') {
            console.log('popup ran!');
            const invisType = inputObject.input.invisType;
            if (invisType === 'display') {
                //Testing
                console.log('display ran!');
                //Code
                let stateSelection = inputObject.input.displayType;
                const firstF = `let stateSelection = "` + stateSelection + `";
                                $("` + target + `").css("display", stateSelection);`;
                const secondF =`$( "` + target + `" ).css('display', 'none');`;
                console.log("first F is " + firstF);
                let output = [firstF, secondF];
                return output;
            }
            else if (invisType === 'opacity') {
                //Testing
                console.log('opacity ran!');
                //Code
                const firstF = `$("` + target + `").css("opacity", "1");`;
                const secondF =`$( "` + target + `" ).css("opacity", "0");`;
                let output = [firstF, secondF];
                return output;
            }

        }
        else if (inputObject.input.functionSubType === 'dropdown') {
            // Testing
            console.log('tooltip dropdown module ran!')
            // Code
            const firstF = `$('` + target + `').css('top', '0px');`
            const secondF = `let h = $('` + target + `').css('height');
            $('` + target + `').css('top', '-' + h);`
            const whenLoad = `$(window).on('load', function() {
                $('` + target + `').wrap('<div class="hidden"></div>');
                $('.hidden').css('overflow', 'hidden');

                let startHeight = $('` + target + `').css('height');
                $('` + target + `').css('top', '-' + startHeight);
            });`;

            let output = [firstF, secondF, whenLoad];
            return output;
        }
        else {
            console.log('The tooltip type "' + inputObject.input.functionSubType + '" is not included in our feature set! Please try again!');
        }
    }
};


module.exports = tooltip;
