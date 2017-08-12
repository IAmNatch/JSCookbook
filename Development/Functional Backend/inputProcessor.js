const trigger = require('./triggerProcessor');

let inputObj = {
    input : [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]],
    repeatCheck : {
        toggleClick: false
    }
};

let inputProcessor = {
    inputProcessor (inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            //Creates Array of inputs
            let toTrigger = {
                repeatCheck : {
                    toggleClick: false
                },
                input : [
                    inputArray[i].functionType,
                    inputArray[i].functionSubType,
                    inputArray[i].triggerType,
                    inputArray[i].triggerID,
                    inputArray[i].targetID,
                    inputArray[i].generalParam,
                    inputArray[i].generalParamTwo,
                    inputArray[i].TriggerParam,
                    inputArray[i].TriggerParamTwo
                ]};
            // Run trigger Processor
            trigger.triggerProcessor(toTrigger);
        }

    }
};

let serverInput = [{functionType : process.argv[2],
    functionSubType : process.argv[3],
    triggerType: process.argv[4],
    triggerID: process.argv[5],
    targetID: process.argv[6],
    generalParam: process.argv[7],
    generalParamTwo: process.argv[8],
    triggerParam: process.argv[9],
    triggerParamTwo: process.argv[10]}];
inputProcessor.inputProcessor(serverInput);


module.exports = inputProcessor;
