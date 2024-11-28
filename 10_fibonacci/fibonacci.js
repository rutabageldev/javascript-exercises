const fibonacci = function(input) {
    let validInput = testInput(input);
    if (validInput){
        return createFibonacci(input);
    } else {
        return "OOPS";
    }
};

function testInput(temp) {
    return parseInt(temp) >= 0;
}

function createFibonacci (target) {
    const endValue = parseInt(target);
    let fibValue = 1;
    let prevFibValue = 1;
    if (endValue == 0) {
        return 0;
    } else {
        if (endValue == 1 || endValue == 2){
            return 1;
        }
        for (let i = 3; i <= endValue; i++) {
            let temp = prevFibValue;
            prevFibValue = fibValue;
            fibValue += temp;
        }
    }
    return fibValue
}

// Do not edit below this line
module.exports = fibonacci;
