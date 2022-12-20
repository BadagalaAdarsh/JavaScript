// Falsy values present in JavaScript
// false
// 0
// empty string ( "" )
// null
// undefined
// NaN

// Truthy values present in JavaScript
// true
// any number (positive or negative) (including Infinity)
// any string including single space ( " " )
// any object
// any array
// any function

// in other words, any value that is not falsy is truthy   :)

// Example 1
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

// Example 2
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

// Example 3
let height = 0;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}
