const trigger = require('./triggerProcessor');
const exporter = require('./modules/dotJSMaker');

// Old input Object
// let inputObj = {
//     input : [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]],
//     repeatCheck : {
//         toggleClick: false
//     }
// };


let inputProcessor = {
    inputProcessor (inputArray) {
        // Loops through all of the input sets, starting the code building process once per a input set.
        let outputArray = [];

        for (let i = 0; i < inputArray.length; i++) {
            //Creates Array of inputs -- This will be removed once we're using a more complex object for communication
            let toTrigger = {
                repeatCheck : {
                    toggleClick: false
                },
                input : inputArray[i]};
            // Run trigger Processor and put it's result to outputArray
            console.log(toTrigger.input);
            outputArray.push(trigger.triggerProcessor(toTrigger));
        }
        console.log('Passing output array into Maker!');
        exporter.dotJSMaker(outputArray);

    }
};


module.exports = inputProcessor;
