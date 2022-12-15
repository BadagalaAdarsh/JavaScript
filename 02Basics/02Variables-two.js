
const uid = "abc123";
// uid = "abc234"; // here we get the error saying TypeError: Assignment to constant variable

var fullName = "Adarsh Badagala";
var email = "badarsh2001@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// different ways of logging the output
console.log("Full Name is " + fullName);
console.log("Email is ", email);

// other way of printing stuff
// remember below are the back ticks (key below the escape key) not the quotes
// In the world of java script it is called as interpolation

console.log(`
    With unique id: ${uid}
    User is : ${fullName}
    email is : ${email}
`)

