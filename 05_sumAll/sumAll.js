const sumAll = function(int1, int2) {
    let min;
    let max;
    if((int1 > 0 && int2 > 0)&&(typeof int1 === "number" && typeof int2 === "number")){
        if (int1>int2){
            min = int2;
            max = int1;
        }
        else {
            min = int1;
            max = int2;
        }
    }
    else {
        return "ERROR";
    }
    return ((max-min)+1)*(min + max)/2;
};

// Do not edit below this line
module.exports = sumAll;
