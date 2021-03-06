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

        if (inputObject.input.triggerType === 'clickToggle') {
            outputCode = trigger.toggle(inputObject);
            return outputCode;
        }
        else if (inputObject.input.triggerType === 'click') {
            outputCode = trigger.singleClick(inputObject);
            return outputCode;
        }
        else if (inputObject.input.triggerType === 'hover') {
            outputCode = trigger.hover(inputObject);
            return outputCode;
        }
        else if (inputObject.input.triggerType === 'scroll') {
            outputCode = trigger.scroll(inputObject);
            return outputCode;
        }
        else {
            console.log('The trigger "' + inputObject.input.triggerType + '" is not included in our feature set! Please try again!');
        }
    }
};

module.exports = triggerProcessor;
