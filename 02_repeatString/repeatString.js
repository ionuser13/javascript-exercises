const repeatString = function(string, num) {
    let newStr = string;
    if(num === 0){
        newStr = "";
    }
    else if (num < 0){
        newStr = "ERROR";
    }
    else {
        for (let i = 1; i<num; i++){
                newStr += string;
        }
    }
    return newStr
};
repeatString("", 0);

// Do not edit below this line
module.exports = repeatString;
