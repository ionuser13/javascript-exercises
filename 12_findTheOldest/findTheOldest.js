const findTheOldest = function(arr) {
    return arr.reduce((previous, current) => {
        const oldestPerson = age(previous.yearOfBirth, previous.yearOfDeath);
        const currentPerson = age(current.yearOfBirth, current.yearOfDeath);
        return currentPerson > oldestPerson ? current : previous
    })
};
function age(birth, death) {
    if(!death) {
        death =  new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
