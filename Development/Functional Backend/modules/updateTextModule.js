let updateText = {
    updateTextGenerater (inputObject) {
        //Testing
        console.log('Update text module ran!');
        //Code
        const trigger = inputObject.input.triggerID;
        const target = inputObject.input.targetID;

        if (inputObject.input.functionSubType === "add") {
            let newText = inputObject.input.generalParam;
            let firstF = `let newText = "` + newText + `";
            $("` + target +`").text(newText);`;
            let secondF = `$( "` + target +`" ).text(ogText);`;
            let whenLoad = `let ogText = $('#text-target1').text()`;

            let output = [firstF, secondF, whenLoad];
            return output;
        }
    }

};

module.exports = updateText;
