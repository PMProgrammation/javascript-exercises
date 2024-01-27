const removeFromArray = function(originalArray, ...elementsToRemove) {
    let cleanArray = originalArray.filter((value) =>
        !elementsToRemove.includes(value));
    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
