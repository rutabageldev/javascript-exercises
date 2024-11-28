const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  const sum = arr.reduce((total, i) => {
    return total + i;
  }, 0)
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((accum, i) => {
    return accum * i;
  }, 1);
}

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let result = 1;
  for (let i = a; i > 0; i--){
    result = result * parseInt(i);
  }
  return result;
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
