const tooltip = require('tooltip');
const changeCSS = require('changeCSS');
const import = require('import');
const sort = require('sort');

let inputArray = [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]];

function processor (inputArray) {
    outputCode = "";

    if (inputArray[0] === 'tooltip') {
        outputCode += tooltip.toolTipGenerator(inputArray);

    }

    else if (inputArray[0] === 'change-css') {
        outputCode += changeCSS.changeCSSGenerator(inputArray);
    }

    else if (inputArray[0] === 'import') {
        outputCode += import.importGenerator(inputArray);
    }

    else if (inputArray[0] === 'sort') {
        outputCode += sort.sortGenerator(inputArray);
    }

    else {
        console.log('The function "' + inputArray[0] + '" is not included in our feature set! Please try again!');
    }

    return outputCode;
}
