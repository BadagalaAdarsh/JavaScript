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
// console.log(loginUserMessage("Adarsh"));//  -> undefined

// REST operator is same as spread
// based on use case we call it rest or spread
// used to take multiple items at once
function calculateCartPrice(...num1){

    return num1;

}

// console.log(calculateCartPrice(200, 400, 500));
// output: [200, 400, 500]
// array returns

const user = {
    username: "adarsh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`); // if object does'nt have username or price then we get undefined
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

