const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i++; i <= arr.length-1){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let result = 1;
  for (let i = 0; i++; i = a){
    result = result * i;
  }
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
