//[Function Type[0], Sub-Type[1], Trigger[2], TriggerID[3], TargetID[4], GeneralParam[5],]
const functionProcessor = require('./../functionProcessor')

let trigger = {
    toggle (inputObject) {
        //Testing
        console.log('trigger click module ran!');
        // Code
        let triggerID = inputObject.input.triggerID;
        let targetID = inputObject.input.targetID;

        let JqueryClick = `jQuery.fn.clickToggle = function(a,b) {
            function cb(){ [b,a][this._tog^=1].call(this); }
            return this.on("click", cb);
        };`
        let startClick = `$( "` + triggerID + `" ).clickToggle(
            function() {`
        let middleClick = `}, function() {`;
        let endClick = `});`;

        let functionContent = functionProcessor.functionProcessor(inputObject);

        // Self executing anonymous function. Beggining and End. Could be moved higher up to avoid writing every time.
        let wrapper = [`(function (){`, `})()`]

        // Builds basic output format
        let output = [startClick, functionContent[0], middleClick, functionContent[1], endClick];

        // If there's a third elemenbt to the function (something that should run in advance),-
        // -it puts it at the begginign of the function.
        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2])
            console.log("unshifted!");
        }

        // If Jquery toggleClick Is not included, needs to be pushed.
        // This needs to be revised to change to true if false, and be written by JSMaker.
        if (inputObject.repeatCheck.toggleClick === false) {
            output.unshift(JqueryClick);
        }

        // Wraps entire function in a self executing function wrapper. This keeps scope issues under control.
        output.unshift(wrapper[0]);
        output.push(wrapper[1]);

        // Joins all components together, with a new line between each.
        let finalOutput = output.join('\n');
        // Console Logs output (Temp)
        console.log('final output is: \n' + finalOutput);
        // Sends final output up the chain
        return finalOutput;
    },
    hover (inputObject) {
        //Testing
        console.log('trigger hover module ran!');
        //Code

        let triggerID = inputObject.input.triggerID;
        let targetID = inputObject.input.targetID;

        // Self executing anonymous function. Beggining and End. Could be moved higher up to avoid writing every time.
        let wrapper = [`(function (){`, `})()`]

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

        // Wraps entire function in a self executing function wrapper. This keeps scope issues under control.
        output.unshift(wrapper[0]);
        output.push(wrapper[1]);

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    },
    scroll (inputObject) {
        //Testing
        console.log('trigger scroll module ran!');
        // Code
        let triggerID = inputObject.input.triggerID;
        let targetID = inputObject.input.targetID;
        let scrollStart = inputObject.input.triggerParam;
        let scrollEnd = inputObject.input.triggerParamTwo;

        // Self executing anonymous function. Beggining and End. Could be moved higher up to avoid writing every time.
        let wrapper = [`(function (){`, `})()`]

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

        let output = [startScroll, winCondition, functionContent[0], middleScroll, functionContent[1], endScroll];

        //Initial Setup (Optional)
        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2]);
            console.log('unshifted!');
        }
        // Wraps entire function in a self executing function wrapper. This keeps scope issues under control.
        output.unshift(wrapper[0]);
        output.push(wrapper[1]);

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    },
    singleClick (inputObject) {
        //Testing
        console.log('Trigger Single Click module ran!');
        // Code
        let triggerID = inputObject.input.triggerID;
        let targetID = inputObject.input.targetID;

        // Self executing anonymous function. Beggining and End. Could be moved higher up to avoid writing every time.
        let wrapper = [`(function (){`, `})()`]

        let startClick = `$( "` + triggerID + `" ).click(function() {`;
        let endClick = `});`

        let functionContent = functionProcessor.functionProcessor(inputObject)

        let output = [startClick, functionContent[0], endClick];

        //Initial Setup (Optional)
        if (functionContent[2] !== undefined) {
            output.unshift(functionContent[2])
            console.log("unshifted!");
        }

        // Wraps entire function in a self executing function wrapper. This keeps scope issues under control.
        output.unshift(wrapper[0]);
        output.push(wrapper[1]);

        let finalOutput = output.join('\n');
        console.log('final output is: \n' + finalOutput);
        return finalOutput;
    }

};

module.exports = trigger;
