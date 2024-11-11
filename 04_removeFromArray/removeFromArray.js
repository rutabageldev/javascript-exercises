/*function removeFromArray (array, ...elemementsToRemove)
    for each element in elementsToRemove
        find the index of the element in the array
        if index != -1
            remove the element from array using splice
    return array
*/

const removeFromArray = function(inputArray, ...elementsToRemove) {
    console.log(`initialConfig:
        inputArray: ${inputArray}
        elementsToRemove: ${elementsToRemove}
        elementsToRemove.length: ${elementsToRemove.length}`);
    for (let i = elementsToRemove.length - 1; i >= 0; i--) {
        console.log(`elementAnalysis:
            elementToRemove[${i}]: ${elementsToRemove[i]}
            inputArray.indexOf(elementsToRemove[${i}]): ${inputArray.indexOf(elementsToRemove[i])}`);
        if (inputArray.indexOf(elementsToRemove[i]) > -1) { 
            while (inputArray.indexOf(elementsToRemove[i]) > -1){
                inputArray.splice(inputArray.indexOf(elementsToRemove[i]), 1);
            }
        }
    }
    console.log (`finalOutput: ${inputArray}`)
    return inputArray;
};


// Do not edit below this line
module.exports = removeFromArray;
