let updateText = {
    updateTextGenerater (inputObject) {
        //Testing
        console.log('Update text module ran!');
        //Code
        const trigger = inputObject.input[3];
        const target = inputObject.input[4];

        if (inputObject.input[1] === "add") {
            let newText = inputObject.input[5];
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
