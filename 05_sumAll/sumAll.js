const sumAll = function(firstNb, secondNb) {
    let sum;
    if (((typeof firstNb) !== "number") ||
            ((typeof secondNb) !== "number") ||
            firstNb < 0 ||
            secondNb < 0) {
        return "ERROR";
    }

    if (firstNb <= secondNb) {
        return sumAllOrdered(firstNb, secondNb);
    }
    else {
        return sumAllOrdered(secondNb, firstNb);
    }
};

function sumAllOrdered(smallerNb, biggerNb) {
    let sum = 0;
    for (let i = smallerNb; i <= biggerNb; i++) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
