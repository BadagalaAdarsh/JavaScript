// array
// () -> parenthesis
// [] -> brackets
// {} -> braces

const myArr = [0, 1, 2, 3, 4, 5]; // it can have multiple data types just like python
const myHeros = ["shaktiman", "naagraj"]
// Java script array are re sizable

const myArr2 = new Array(1,2,3,4);

// array copy is a shallow copy
// shallow copy -> copy by reference
// deep copy -> copy by value

// Array methods

myArr.push(6);
myArr.push(7);
myArr.pop(); // remove last element


myArr.unshift(9); // add a new element at the start
myArr.shift(); // removes element from start or first element

// console.log(myArr.includes(9)); // check if element exist => return boolean
// console.log(myArr.indexOf(9)) ; // get index of element, returns -1 if it doesn't exist
// console.log(myArr);

// const newArr = myArr.join(); // return a string joining all the elements of the array
// console.log(newArr);



// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3); // [start, end)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3); // [start, end]
console.log(myn2);
console.log('C', myArr); // splice manipulates the original array