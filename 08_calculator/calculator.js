const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, currentNum) => total + currentNum, 0)
};

const multiply = function(arr) {
  return arr.length ? arr.reduce((total, nextNum) => total * nextNum) : 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let result = 1;
  if(a>0) {
    for (let i = a; i>0; i--) {
      result = result*i;
    }
    return result;
  }
  else if (a === 0) {
    return result;
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
