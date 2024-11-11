const reverseString = function(input) {
    let inputChar = input.split("");
    let output ="";
    for (let i = inputChar.length - 1; i >= 0; i--) {
        output = output + inputChar[i];
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;
