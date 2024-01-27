const repeatString = function(text, nbTimes) {
    if (nbTimes < 0) {
        return "ERROR";
    }
    
    let repeatedString = '';

    for (let i = 1; i <= nbTimes; i++) {
        repeatedString += text;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
