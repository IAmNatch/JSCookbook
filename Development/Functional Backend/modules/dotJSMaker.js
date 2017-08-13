const fs = require('fs');

let dotJSMaker = {
    dotJSMaker (inputArray) {
        console.log('dotJSMaker ran!');
        console.log(inputArray);

        //Hardcoded Write location for now. This should make new files eventually in server. Or something.
        var writableStream = fs.createWriteStream('/Users/shanerobbins/Desktop/JSCookbook/Development/Functional Backend/exports/output.js');
        // Loops through all inputs and write them to write stream
        for (let i = 0; i < inputArray.length; i++) {
            // May add/loop in a line break in between each section.
            //Writes current iteration to stream
            writableStream.write(inputArray[i]);
        }

    }
};

module.exports = dotJSMaker;
