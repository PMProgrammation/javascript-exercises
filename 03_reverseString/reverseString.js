const reverseString = function(string) {
    let charArray = string.split("");
    let reversedArray = [];
    while (charArray.length > 0) {
        reversedArray.push(charArray.pop());
    }
    let reversedString = reversedArray.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
