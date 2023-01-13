const palindromes = function (str) {
    let regEx = /[^a-z]/g;
    let modifiedStr = str
        .toLowerCase()
        .replace(regEx, "");
    let reverseStr = modifiedStr
        .split("")
        .reverse()
        .join("");
    return reverseStr == modifiedStr
};

// Do not edit below this line
module.exports = palindromes;
