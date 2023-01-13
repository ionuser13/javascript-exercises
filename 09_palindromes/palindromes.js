const palindromes = function (str) {
    let regEx = /[^a-z]/g;
    let modStr = str
        .toLowerCase()
        .replace(regEx, "");
    let reverseStr = modStr
        .split("")
        .reverse()
        .join("");
    return reverseStr == modStr
};

// Do not edit below this line
module.exports = palindromes;
