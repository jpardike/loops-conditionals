/* 
CONTROL FLOW

    Conditionals - Skips lines of code, or entire blocks
    Loops - Repeats lines of code
    Functions - save lines of code to be reused, or i=used later


*/

// Conditional

const temp = 90;

const isSunny = true;
/* 
if (temp > 70 && isSunny) {
    console.log('It is a beautiful day!');
} else if (temp > 70 && !isSunny) {
    console.log('Today is a bit muggy.')
} else {
    console.log('The result is false');
} */

//  Logical Operators

//      || => Logical OR - Return the first truthy value
//      && => Logical AND

let isAdmin = true;
let isEditer = true;
/* 
if (isAdmin && isEditer) {
    console.log('You have access!');
} else {
    console.log('You do not have access!');
} */


//  Compairison Operators

/* 
    <, >, <=, >=
*/

//  equality Operators

/* 
    == loose equality
    === strict equality
    != 
    !== strict inequality
*/

// Truthiness

/* Falsey Values

0
-0
''
nulll
undefined
false
NaN

*/


//  Loops
/* 
for (let i = 10; i >= 0; i--) {
    console.log('the value of i = ' + i);
} */

// ----------------------------- 

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}