// function isEven(element) {
//     // if (element % 2 === 0) {
//     //     return true;
//     // }
//     // return false;
//     return element % 2 === 0;
// }

// other way is to use arrow function.

var isEven = function (element) {
    return element % 2 === 0;
};

// above code can be written as:
var isEven = (element) => {
    return element % 2 === 0;
};

console.log(isEven(2)); // this will return true or say print true

// if there is only one statement in the function then we can write it as:
var isEven = (element) => element % 2 === 0;

// if there is only one parameter then we can write it as:
var isEven = (e) => e % 2 === 0;

// // if there is no parameter then we can write it as:
// var isEven = () => e % 2 === 0;

// we can use array without having any name

var result = [2, 4, 6, 8].every((e) => e % 2 === 0); // this will return true
// in the arrow function if there are more than one line then we have to use curly braces.
console.log(result);

// or we can use the even function
result = [2, 4, 6, 8].every(isEven); // this will return true
console.log(result);
