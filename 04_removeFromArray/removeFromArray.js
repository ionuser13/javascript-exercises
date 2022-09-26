const removeFromArray = function(arr, ...elem) {
    return arr.filter(v => !elem.includes(v));
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
