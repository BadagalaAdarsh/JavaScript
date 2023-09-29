const user = {
    username: "adarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // 'this' refers to the current context
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Murthy"
// user.welcomeMessage();

// console.log(this); // in node environment is empty {}
// in browser we get output as window


// function chai() {
//     let username = "adarsh";
//     console.log(this);
//     console.log(this.username); // -> undefined
//     // this key word works inside object but in function
// }

// chai();


// const chai = function () {
//     let username = "adarsh";
//     console.log(this.username); // undefine
//     console.log(this); // prints so many things about the function
// }


const chai = () => {
    let username = "adarsh";
    console.log(this.username); // -> undefined as here , it is also a function
    console.log(this); // -> {}
}

// chai();

// BASIC syntax of arrow function
// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return (works only when there is only one statement)
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); // we can write in this way as well
// if we have parenthesis, we don't need return statement, but in braces we need return statement

// const addTwo = (num1, num2 ) => {username: "adarsh"}; // it does'nt work since it is a object , just returns undefined
const addTwo = (num1, num2) => ({username: "adarsh"}); // it will work, we need to wrap the object in parenthisis to make it work

console.log(addTwo(3,4));

// Example of using arrow function with the arrays
// const myArray = [2, 5,3, 7, 8];
// myArray.forEach(() => ())