/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO add your code here

function countChar(string, character) {
    const arrayOfLetters = string.split()
    let count;

    for(let i = 0; i < arrayOfLetters.length; i++) {
        if(string === null || character === null) {
            return -1;
        } else {
            const filteredArray = arrayOfLetters.filter(letter => letter === character);
            return count = filteredArray.length;
        }
    }
}


module.exports = countChar;
