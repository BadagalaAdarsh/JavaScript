let score = true;

// console.log(typeof score);
// console.log(typeof(score));

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1, false => 0


let valueInNumber = Number(score); // if the score that we are passing over here is not completely number or say something like 33abc then the type of will say number but the actual value will be Nan
// similary if the score is null it is going to print the actual value as 0
// and if the score is undefined then the value is NaN again
// for boolean we get 1 for true and 0 for false

// console.log(typeof(valueInNumber));
// console.log(valueInNumber); 

// 1 or any other number => true
// 0 => false
// empty string => false
// value in string => true

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);


let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(typeof stringNumber);
// console.log(stringNumber);




// ************************************* Operations **********************************

let value = 3;
let negValue = -value;

// console.log(negValue);

// basic arithmatic operations have been skipped as it is basic

let str1 = "hello"
let str2 = " adarsh";

let str3 = str1 + str2; // basic concatenation
// console.log(str3);

// console.log("1" + 2); // js infamous for concatenating as string
// console.log(1 + "2");

// console.log("1" + 2 + 2); // 122

// console.log(1 + 2 + "2"); // 32 ( 1 and 2 added and later 2 was concatenated)
// it is based on the ECMA script

// if string is first everything is converted to string 
// if string is last, then first things are converted based on priority and then later others are converted to string

// console.log(+true); // just true print true but adding 
// +true => 1
// true+ => error

// console.log(+"");
// "" => ""
// +"" => 0
// ""+ => error

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; // post fix and prefix expression

console.log(gameCounter);