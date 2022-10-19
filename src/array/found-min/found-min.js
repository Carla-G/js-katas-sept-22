/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
function min(array) {
    if (array === undefined || array === null || array.length === 0) {
        return null;
    } else if (array.length === 1) {
        return array[0];
    } else {
        for(let i = 1; i < array.length; i++) {
            let min = array[0];
            if(array[i] < min) {
                return min = array[i];
            }
        }
    }
}


module.exports = min;
