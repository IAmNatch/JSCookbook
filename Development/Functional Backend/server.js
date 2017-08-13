const input = require('./inputProcessor');

let serverInput = [{functionType : process.argv[2],
    functionSubType : process.argv[3],
    triggerType: process.argv[4],
    triggerID: process.argv[5],
    targetID: process.argv[6],
    generalParam: process.argv[7],
    generalParamTwo: process.argv[8],
    triggerParam: process.argv[9],
    triggerParamTwo: process.argv[10]}];

input.inputProcessor(serverInput);
