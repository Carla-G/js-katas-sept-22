/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
function abbreviate (name) {
    const arrayOfLetters = name.split();
    const lettersUpperCased = arrayOfLetters.map(letter => letter.toUpperCase())
    let abbreviation = [];

    for(let i = 0; arrayOfLetters.length; i++) {
        if(arrayOfLetters[i] === lettersUpperCased[i]) {
            abbreviation.push(arrayOfLetters[i])
            return abbreviation.join(".");
        }
    }
}

module.exports = abbreviate;
