let score = true;

console.log(typeof score);
console.log(typeof(score));

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1, false => 0


let valueInNumber = Number(score); // if the score that we are passing over here is not completely number or say something like 33abc then the type of will say number but the actual value will be Nan
// similary if the score is null it is going to print the actual value as 0
// and if the score is undefined then the value is NaN again
// for boolean we get 1 for true and 0 for false

console.log(typeof(valueInNumber));
console.log(valueInNumber); 

// 1 or any other number => true
// 0 => false
// empty string => false
// value in string => true

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let someNumber = 33;

let stringNumber = String(someNumber);

console.log(typeof stringNumber);
console.log(stringNumber);
