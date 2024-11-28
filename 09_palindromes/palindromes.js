const palindromes = function (input) {
    input = cleanString(input);
    let reverseString =input.split("").reverse().join("");
    return input === reverseString
};

function cleanString(str){
    const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let temp = str.toLowerCase();
    let tempArray = temp.split("");
    let cleanArray = tempArray.filter(char => allowed.includes(char));
    return cleanArray.join("");
}

// Do not edit below this line
module.exports = palindromes;
