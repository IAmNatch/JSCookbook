// Import Trigger Module
const trigger = require('./modules/triggerModule');

// Sets Input to Command Line Args
// let inputObj = {
//     input : [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]],
//     repeatCheck : {
//         toggleClick: false
//     }
// };

// Guideline to Using Command Line Args
//   inputArray  = [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]];
//   inputObj    = [Function Type[0],  Sub-Type[1],     Trigger[2],     TriggerID[3],    TargetID[4],    GeneralParam[5],  GeneralParamTwo[6], TriggerParam[7], TriggerParamTwo[8]


//Processor Starts
let triggerProcessor = {
    triggerProcessor (inputObject) {
        //Testing
        console.log('Trigger Processor ran!');
        // Code
        let outputCode = '';

        if (inputObject.input[2] === 'toggle') {
            outputCode = trigger.toggle(inputObject);
        }
        else if (inputObject.input[2] === 'singleClick') {
            outputCode = trigger.singleClick(inputObject);
        }
        else if (inputObject.input[2] === 'hover') {
            outputCode = trigger.hover(inputObject);
        }
        else if (inputObject.input[2] === 'scroll') {
            outputCode = trigger.scroll(inputObject);
        }
        else {
            console.log('The trigger "' + inputObject.input[2] + '" is not included in our feature set! Please try again!');
        }
    }
};

module.exports = triggerProcessor;
