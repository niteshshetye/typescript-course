// union

// function combine(input1: number | string, input2: number | string ){
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         return input1 + input2;
//     }else{
//         return `${input1} ${input2}`;
//     }
// }

// const add = combine(2, 3);
// const createName = combine("Nitesh", "Shetye");

// console.log(add)
// console.log(createName)


// literals type
// function combine(input1: number | string, input2: number | string, typeOfResult: 'in-string-format' | 'in-number-format'){
//     if(typeof input1 === 'number' && typeof input2 === 'number' || typeOfResult === 'in-number-format'){
//         return +input1 + +input2;
//     }else{
//         return `${input1} ${input2}`;
//     }
// }

// const add = combine(2, 3, 'in-string-format');
// const addString = combine("3", "3", 'in-number-format');
// const createName = combine("Nitesh", "Shetye", 'in-string-format');

// console.log(add)
// console.log(addString)
// console.log(createName)

// type alises
function combine(input1: number | string, input2: number | string, typeOfResult: 'in-string-format' | 'in-number-format'){
    if(typeof input1 === 'number' && typeof input2 === 'number' || typeOfResult === 'in-number-format'){
        return +input1 + +input2;
    }else{
        return `${input1} ${input2}`;
    }
}

const add1 = combine(2, 3, 'in-string-format');
const addString = combine("3", "3", 'in-number-format');
const createName = combine("Nitesh", "Shetye", 'in-string-format');

console.log(add1);
console.log(addString);
console.log(createName);

