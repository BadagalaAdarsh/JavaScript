// console.log("A");
// console.log("D");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");
// we don't want to keep on writing same code

// function sayMyName() {
//     console.log("A");
//     console.log("D");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
// }

// sayMyName(); // just using sayMyName , it is reference

// function addTwoNumbers(number1, number2)  { // here it is called parameters
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 4); // here we call 3 and 4 as arguments just a nomenclature

// console.log("Result: ", result); // Result: undefined
// // since we just did console in function but we didn't return any thing

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);


// giving default paramenter 
// function loginUserMessage(userName = "default value")
function loginUserMessage(userName) {
    // if(userName === undefined) { // can also write as if(!username)
    //     console.log("Please enter a user name");
    //     return;
    // }
    


    // if(userName) {
    //     return `${userName} just logged in`;
    // }

    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Adarsh"));
console.log(loginUserMessage("Adarsh"));//  -> undefined


