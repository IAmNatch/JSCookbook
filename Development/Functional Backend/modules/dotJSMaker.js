const fs = require('fs');
var beautify = require('js-beautify')

let dotJSMaker = {
    dotJSMaker (inputArray, res, cb) {
        console.log('dotJSMaker ran!');
        console.log(inputArray);

        let output = '//Created with My JSCookbook \n //Keep On hacking! \n';
        // Loops through all inputs and write them to write stream
        for (let i = 0; i < inputArray.length; i++) {
            output = output + '\n' + '//Function Number ' + (i+1) + '\n';
            for (var l = 0; l < inputArray[i].length; l++) {
                // writableStream.write(inputArray[i][l] + '\n');
                output = output + inputArray[i][l] + '\n';

            }
        }
        output = beautify(output);
        console.log('SUPER');
        console.log(output);

        //Hardcoded Write location for now. This should make new files eventually in server. Or something.
        var writableStream = fs.createWriteStream('/Users/shanerobbins/Desktop/JSCookbook/Development/Functional Backend/public/output.js');
        writableStream.write(output);
        writableStream.end();

        if (output !== undefined) {
            var fileName = './public/output.js';
            setTimeout(() => {
                res.download(fileName, 'output.js', function(err){
                    if (err) {
                        console.log(err);
                        res.send('Error, File Do Not Exist', 404)
                    } else {
                        console.log('A MF FILE WAS SENT');
                    }
                });
            }, 2000)
        }
        else {
            res.send('Your configurtation does not exist!', 404)
        }
    }
}

module.exports = dotJSMaker;
