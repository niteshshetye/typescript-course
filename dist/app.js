"use strict";
// unknown type
/*
    unknown is type which comes with certain restriction over any

    any and unknown works similar in most cases
    but unknown is restricted in some part
    like below
*/
let userInput;
let userName;
userInput = 4;
console.log(userInput);
userInput = 'nitesh';
console.log(userInput);
// userName = userInput // uncomment and comment;
// gives error because its not confirm that userInput will always a string
// and userName have a type of string thats which it gives an error
// but this is not case in any that why unknown is different
// never type (its use in function) that means this function never return anything
function genrateError(message, code) {
    throw { message: message, errorCode: code };
}
genrateError('An error Occured!', 500);
