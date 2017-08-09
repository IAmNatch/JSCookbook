/* const tooltip = require('tooltip');
const changeCSS = require('changeCSS');
const import = require('import');
const sort = require('sort'); */
const trigger = require('./modules/triggerModule');
let inputObj = {
    input : [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]],
    repeatCheck : {
        toggleClick: false
    }
};

//let inputArray = [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]];
//                 [Function Type[0],  Sub-Type[1],     Trigger[2],     TriggerID[3],    TargetID[4],    GeneralParam[5],  GeneralParamTwo[6], TriggerParam[7], TriggerParamTwo[8]

function processor (inputObject) {
    //Testing
    console.log('Trigger Processor ran!');
    // Code
    let outputCode = '';

    if (inputObject.input[2] === 'toggle') {
        outputCode += trigger.toggle(inputObject);
    }
    else if (inputObject.input[2] === 'singleClick') {
        outputCode += trigger.singleClick(inputObject);
    }
    else if (inputObject.input[2] === 'hover') {
        outputCode += trigger.hover(inputObject);
    }
    else if (inputObject.input[2] === 'scroll') {
        outputCode += trigger.scroll(inputObject);
    }
    else {
        console.log('The trigger "' + inputObject.input[2] + '" is not included in our feature set! Please try again!');
    }
}

processor(inputObj);
