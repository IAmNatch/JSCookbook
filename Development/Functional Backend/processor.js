const tooltip = require 'tooltip';

let inputArray = [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]];

function processor (inputArray) {
    if (inputArray[0] === 'tooltip') {
        toolTipGenerator(inputArray);
    }

    else if (inputArray[0] === 'change-css') {
        changeCSSGenerator(inputArray);
    }

    else if (inputArray[0] === 'import') {
        tooltipGenerator(inputArray);
    }

    else if (inputArray[0] === 'sort') {
        sortGenerator(inputArray);
    }

    else {
        console.log('The function "' + inputArray[0] + '" is not included in our feature set! Please try again!');
    }
}

function toolTipGenerator(inputArray) {
    if (inputArray[1] === 'popup') {
        TTPopup(inputArray);
    }
    else if (inputArray[1] === 'dropdown') {
        console.log('Sorry! dropdowns have not yet been added to our tooltipping feature set!')
    }
}
