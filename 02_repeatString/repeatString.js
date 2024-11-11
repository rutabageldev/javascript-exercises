const repeatString = function(input, qty) {
    let output ='';
    if (qty < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i <qty; i++) {
            output = output + input;
        }
    } 
    return output;
    };

// Do not edit below this line
module.exports = repeatString;
