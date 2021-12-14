"use strict";
// x is number y is number and the value which is 
// returning from this function is also number
function add(x, y) {
    return x + y;
}
// if not returning any thing
function printResult(num) {
    console.log("Result is: ", num);
}
printResult(add(2, 3));
// function types
// lets check why its important
// let combineValues; // bydefault type is any
// combineValues = add; // now its a function because add is function
// console.log(combineValues(8,8));
// // it working but what if i set combineValues to a string or number 
// // obvio its give me error  at runtime because combineValues have type any at the begins 
// // so we can store anything here a function, number, string or array etc..
// combineValues = 8; 
// console.log(combineValues(2,3)) // throw error because its not a function anymore
/*
    So what we do to avoid this
*/
// let combineValues: Function;
// combineValues = add; 
// console.log(combineValues(8,8));
// // combineValues = 8; 
// console.log(combineValues(2,3));
// another way
// let combineValues: (a: number, b: number) => number;
// combineValues = add; 
// console.log(combineValues(8,8));
// // combineValues = printResult; 
// // throw error because the skelton we define while initialize its different 
// // it has two params with return a number
// // while printResult have one param and nothing is return
// console.log(combineValues(2,3));
// some use Cases
function addAndHandle(x, y, cb) {
    const result = x + y;
    cb(result);
}
addAndHandle(4, 5, (data) => {
    console.log(data);
});
