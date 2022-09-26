const ftoc = function(tempF) {
  let cTemp = (tempF - 32)*(5/9)
  return Math.round(cTemp * 10)/10
};

const ctof = function(tempC) {
  let fTemp = tempC * (9/5) + 32;
  return Math.round(fTemp*10)/10
};  

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
