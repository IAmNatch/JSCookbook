const trigger = require('./triggerProcessor');



// Old input Object
// let inputObj = {
//     input : [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]],
//     repeatCheck : {
//         toggleClick: false
//     }
// };


let inputProcessor = {
    inputProcessor (inputArray) {
        console.log("INPUT PROCESSOR RAN");
        console.log(inputArray);
        //Creates Array of inputs -- This will be removed once we're using a more complex object for communication
        let toTrigger = {
            repeatCheck : {
                toggleClick: false
            },
            input : inputArray};
        // Run trigger Processor and put it's result to outputArray
        console.log("To Trigger Bellow");
        console.log(toTrigger.input);
        let output = [];
        output.push(trigger.triggerProcessor(toTrigger));

        return output;
    }
};


module.exports = inputProcessor;
