const tooltip = require('./modules/tooltipModule');
const css = require('./modules/cssModule');
const updateText = require('./modules/updateTextModule');
// const importer = require('./modules/importModule')


let functionProcessor = {
    functionProcessor (inputObject) {
        //Testing//
        console.log('function processor ran!');
        //Code//

        // creates output code varable
        let outputCode = null;

        if (inputObject.input[0] === 'tooltip') {
            outputCode = tooltip.toolTipGenerator(inputObject);
            // console.log("function process outoput is: " + outputCode);
            return outputCode;
        }
        else if (inputObject.input[0] === 'css') {
            outputCode = css.cssGenerator(inputObject);
            return outputCode;

        }
        else if (inputObject.input[0] === 'updateText') {
            outputCode = updateText.updateTextGenerater(inputObject);
            return outputCode;
        }
        // else if (inputObject[0] === 'import') {
        //     outputCode = importer.importGenerator(inputObject);
        // }
        //
        // else if (inputObject[0] === 'sort') {
        //     outputCode = sort.sortGenerator(inputObject);
        // }

        else {
            console.log('The function "' + inputObject.input[0] + '" is not included in our feature set! Please try again!');
        }

        return outputCode;
    }
};

module.exports = functionProcessor;
