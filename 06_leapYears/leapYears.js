/*function leapYears(year)
    if (year is divisible by 400)
        return true
    else if (year is divisible by 4 AND year is not divisible by 100)
        return true
    else
        return false
     */

const leapYears = function(year) {
    if (year % 400 == 0) {
        return true;
    } else if(year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
