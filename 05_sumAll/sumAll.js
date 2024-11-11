/*
function sumAll(inputOne, inputTwo)
    initialize output = 0
    if validateInput(inputOne) is false OR validateInput(inputTwo) is false
        return "ERROR"

    set start = min(inputOne, inputTwo)
    set end = max(inputOne, inputTwo)

    for i from start to end inclusive
        add i to output

    return output

function validateInput(input)
    if input is not a number OR input is less than 1 OR input is not an integer
        return false
    return true
*/

const sumAll = function(inputOne, inputTwo) {
    console.log(`Inputs:
        inputOne: ${inputOne}
        inputTwo: ${inputTwo}`);
    let output = 0;
    let validOne = null;
    let valideTwo = null;

    validOne = validateInput(inputOne);
    valideTwo = validateInput(inputTwo)
    console.log(`Input Validation:
        validOne: ${validOne}
        valideTwo: ${valideTwo}`);
    if (!validOne || !valideTwo) {
        console.log(`Returned ERROR`)
        return 'ERROR';
    } else{
        console.log(`Loop parameters:
            startValue: ${Math.min(inputOne, inputTwo)}
            endValue: ${Math.max(inputOne, inputTwo)}`);
        for(i = Math.min(inputOne, inputTwo); i <= Math.max(inputOne, inputTwo); i++) {
            output = output + i;
        }
        console.log(`output: ${output}`);
        return output;
    }
};

function validateInput(input) {
    if (input >= 0 && Number.isInteger(input)) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = sumAll;
