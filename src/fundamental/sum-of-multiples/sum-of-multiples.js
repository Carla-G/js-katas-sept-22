/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Create a function `sum` which returns the sum of all the multiples of 3 or 5 below the number in argument.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// TODO add your code here
const number = [];

for (let n = 1; n < 11; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
        return number.push(n);
    }
}

function sum(array) {
    return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

sum(number)



// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.strictEqual(sum(10), 23);
assert.strictEqual(sum(42), 408);
assert.strictEqual(sum(100), 2318);

// End of tests
