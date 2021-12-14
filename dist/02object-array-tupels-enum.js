"use strict";
// Objects
// const person:{
//     name: string;
//     age: number;
// } = {
//     name: 'Nitesh Shetye',
//     age: 22
// }
// console.log(person);
const person = {
    name: 'Nitesh Shetye',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
};
// Array
// let stringArray: string[]
// stringArray = ['nitesh', 'manish', 'adit'];
// let numberArray: number[]
// numberArray = [45, 1, 2];
// let anyArray: any[]
// anyArray = ['nitesh', 45, ['home'], {email: 'nitesh@gmail.com'}, true]
for (let hobby of person.hobbies) {
    console.log(hobby);
}
// Tupels
let role;
role = [2, 'admin'];
console.log(role);
// Enum
var Role;
(function (Role) {
    Role["READ"] = "READ-ONLY-USER";
    Role["ADMIN"] = "ADMIN-USER";
    Role["CUSTOMER"] = "CUSTOMER-ONLY-USER";
})(Role || (Role = {}));
const person1 = {
    name: 'Nitesh Shetye',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ
};
if (person1.role === Role.READ) {
    console.log('i am a read only user');
}
