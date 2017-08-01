let tooltip = {

    toolTipGenerator(inputObject) {
        //Testing
        console.log("tooltip module ran!");
        //Code
        const trigger = inputObject.input[3];
        const target = inputObject.input[4];

        if (inputObject.input[1] === 'popup') {
            console.log('popup ran!');
            const invisType = inputObject.input[5];
            if (invisType === 'display') {
                console.log('display ran!');
                let stateSelection = inputObject.input[6]
                const firstF = `let stateSelection = "` + stateSelection + `";
                                $("` + target + `").css("display", stateSelection);`;
                const secondF =`$( "` + target + `" ).css('display', 'none');`;
                let output = [firstF, secondF];
                return output;
            }
        }
        else if (inputObject.input[1] === 'dropdown') {
            console.log('Sorry! dropdowns have not yet been added to our tooltipping feature set!')
        }
        else {
            console.log('The tooltip type "' + inputObject[3] + '" is not included in our feature set! Please try again!');
        }
    }
};


module.exports = tooltip;
