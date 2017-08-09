//[Function Type[0], Sub-Type[1], Trigger[2], TriggerID[3], TargetID[4], GeneralParam[5],]
const functionProcessor = require('./../functionProcessor')

let trigger = {
    toggle (inputObject) {
        //Testing
        console.log('trigger click module ran!');
        // Code
        let triggerID = inputObject.input[3];
        let targetID = inputObject.input[4];

        let JqueryClick = `jQuery.fn.clickToggle = function(a,b) {
            function cb(){ [b,a][this._tog^=1].call(this); }
            return this.on("click", cb);
        };`
        let startClick = `$( "` + triggerID + `" ).clickToggle(
            function() {`
        let middleClick = `}, function() {`
        let endClick = `});`

        let functionContent = functionProcessor.functionProcessor(inputObject)

        let output = [startClick, functionContent[0], middleClick, functionContent[1], endClick];

        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2])
            console.log("unshifted!");
        }

        if (inputObject.repeatCheck.toggleClick === false) {
            output.unshift(JqueryClick);
        }

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    },
    hover (inputObject) {
        //Testing
        console.log('trigger hover module ran!');
        //Code

        let triggerID = inputObject.input[3];
        let targetID = inputObject.input[4];

        let startHover = `$("` + triggerID + `").on({
            'mouseenter':function(){`;
        let middleHover = `},'mouseleave':function(){`;
        let endHover = `    }
        });`;

        let functionContent = functionProcessor.functionProcessor(inputObject)

        let output = [startHover, functionContent[0], middleHover, functionContent[1], endHover];

        // Initial Setup (Optional)
        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2])
            console.log("unshifted!");
        }

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    },
    scroll (inputObject) {
        //Testing
        console.log('trigger scroll module ran!');
        // Code
        let triggerID = inputObject.input[3];
        let targetID = inputObject.input[4];
        let scrollStart = inputObject.input[7];
        let scrollEnd = inputObject.input[8];

        let startScroll = `$(document).scroll(function () {
            let y = $(this).scrollTop();`

        let winCondition = '';

        if (scrollEnd === undefined || scrollEnd === "") {
            winCondition = `if (y > ` + scrollStart + `) {`
        }
        else {
            winCondition = `if (y > ` + scrollStart + `&& y <` + scrollEnd + `) {`
        }

        let middleScroll = `        }
                else {`

        let endScroll = `        }
            });`

        let functionContent = functionProcessor.functionProcessor(inputObject)

        //Initial Setup (Optional)
        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2])
            console.log("unshifted!");
        }

        let output = [startScroll, winCondition, functionContent[0], middleScroll, functionContent[1], endScroll];

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    },
    singleClick (inputObject) {
        //Testing
        console.log('Trigger Single Click module ran!');
        // Code
        let triggerID = inputObject.input[3];
        let targetID = inputObject.input[4];

        let startClick = `$( "` + triggerID + `" ).click(function() {`;
        let endClick = `});`

        let functionContent = functionProcessor.functionProcessor(inputObject)

        let output = [startClick, functionContent[0], endClick];

        //Initial Setup (Optional)
        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2])
            console.log("unshifted!");
        }

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    }

};

module.exports = trigger;
