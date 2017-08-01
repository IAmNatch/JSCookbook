const tooltip = require('./modules/tooltipModule');

let functionProcessor = {
    functionProcessor (inputArray) {
        //Testing
        console.log('function processor ran!');
        //Code
        let outputCode = [];

        if (inputArray.input[0] === 'tooltip') {
            outputCode = tooltip.toolTipGenerator(inputArray);
            console.log("function process outoput is: " + outputCode);
            return outputCode;
        }
        //
        // else if (inputArray[0] === 'change-css') {
        //     outputCode = changeCSS.changeCSSGenerator(inputArray);
        // }
        //
        // else if (inputArray[0] === 'import') {
        //     outputCode = import.importGenerator(inputArray);
        // }
        //
        // else if (inputArray[0] === 'sort') {
        //     outputCode = sort.sortGenerator(inputArray);
        // }

        else {
            console.log('The function "' + inputArray.input[0] + '" is not included in our feature set! Please try again!');
        }

        return outputCode;
    }
}

module.exports = functionProcessor;
