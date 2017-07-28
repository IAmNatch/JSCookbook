let tooltip = {

    tooltipGenerator: function toolTipGenerator(inputArray) {
        if (inputArray[1] === 'popup') {
            ttPopup(inputArray);
        }
        else if (inputArray[1] === 'dropdown') {
            console.log('Sorry! dropdowns have not yet been added to our tooltipping feature set!')
        }
    }
};

function ttPopup(inputArray) {
    
}




module.exports = tooltip;
