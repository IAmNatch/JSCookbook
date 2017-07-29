let tooltip = {

    tooltipGenerator: function toolTipGenerator(inputArray) {
        if (inputArray[1] === 'popup') {
            let result = ttClick(inputArray);
            return result;
        }
        else if (inputArray[1] === 'dropdown') {
            console.log('Sorry! dropdowns have not yet been added to our tooltipping feature set!')
        }
    }
};

function ttClick(inputArray) {

}




module.exports = tooltip;
