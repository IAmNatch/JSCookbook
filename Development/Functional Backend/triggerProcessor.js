/* const tooltip = require('tooltip');
const changeCSS = require('changeCSS');
const import = require('import');
const sort = require('sort'); */
const trigger = require('./modules/triggerModule');
// node triggerProcessor.js tooltip popup click "#tt-trigger1" "#tt-target1" display block
// node triggerProcessor.js tooltip popup hover "#tt-trigger2" "#tt-target2" display block
// node triggerProcessor.js tooltip popup scroll "#tt-trigger3" "#tt-target3" display block 100 180
// node triggerProcessor.js tooltip popup click "#tt-trigger1" "#tt-target1" opacity
// node triggerProcessor.js tooltip popup hover "#tt-trigger2" "#tt-target2" opacity
// node triggerProcessor.js tooltip popup scroll "#tt-trigger3" "#tt-target3" opacity "" 100 180
// node triggerProcessor.js tooltip dropdown click "#tt-trigger4" "#tt-target4"
// node triggerProcessor.js tooltip dropdown hover "#tt-trigger5" "#tt-target5"
// node triggerProcessor.js tooltip dropdown scroll "#tt-trigger6" "#tt-target6" "" "" 100 180
// node triggerProcessor.js css toggle click "#class-target1" "#class-target1" "drop-shadow"
// node triggerProcessor.js css toggle hover "#class-target1" "#class-target1" "drop-shadow"
// node triggerProcessor.js css toggle scroll "#class-target1" "#class-target1" "drop-shadow" "" 300 400
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

    if (inputObject.input[2] === 'click') {
        outputCode += trigger.click(inputObject);
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
