let cssFunctions = {

    cssGenerator(inputObject) {
        //Testing
        console.log('css module ran!');
        // Code
        const trigger = inputObject.input.triggerID;
        const target = inputObject.input.targetID;
        const classSelection = inputObject.input.generalParam;

        if (inputObject.input.functionSubType === 'add') {
            let firstF = `$('` + target + `').addClass('` + classSelection + `');`;
            let secondF = `$('` + target + `').removeClass('` + classSelection + `');`;

            let output = [firstF, secondF];
            return output;
        }
        else if (inputObject.input.functionSubType === 'remove') {
            let firstF = `$('` + target + `').removeClass('` + classSelection + `');`;
            let secondF = `$('` + target + `').addClass('` + classSelection + `');`;

            let output = [firstF, secondF];
            return output;
        }

    }
};

module.exports = cssFunctions;
