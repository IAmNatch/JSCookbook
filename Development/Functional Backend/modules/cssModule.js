let cssFunctions = {

    cssGenerator(inputObject) {
        //Testing
        console.log('css module ran!');
        // Code
        const trigger = inputObject.input[3];
        const target = inputObject.input[4];
        const classSelection = inputObject.input[5]

        if (inputObject.input[1] === 'toggle') {
            let firstF = `$('` + target + `').addClass('` + classSelection + `');`;
            let secondF = `$('` + target + `').removeClass('` + classSelection + `');`;

            let output = [firstF, secondF];
            return output;
        }

    }
};

module.exports = cssFunctions;
