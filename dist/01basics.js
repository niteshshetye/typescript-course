"use strict";
console.log('Running on port 3000!');
function add2(num1, num2, showResult, resultPhrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
/*
  its good to declare the type only if you not declare the value
  and variable is let or var
*/
let number1;
let printResult1;
let resultPhrase;
number1 = 2;
/*
    number2 here not requied to specify which type because its
    a constant 'const' and also declare the value
*/
const number2 = 5.3;
printResult1 = true;
resultPhrase = "Addition Of two Number is: ";
add2(number1, number2, printResult1, resultPhrase);
