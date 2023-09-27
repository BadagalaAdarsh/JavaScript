// Link to the documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Notes
/*
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/

// Primitive data type => call by value ( not the reference value is only copied)

// 7 types: String, Number, Boolean, Null, Undefined, Symbol ( to make any value unique ), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined; // same as let userEamil;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false
console.log(id, anotherId); // Symbol(123) Symbol(123)

const bigNumber = 32418793412871932847193827n // adding n in the end says that it is a BigInt

// Reference data type or Non Primitive data type

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] 
let myObj = {
    name: "adarsh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// use type of to know the datatype

console.log(typeof bigNumber );

// when we use type of for null we get the data type as Object ( generally asked in interviews )

// data type using type of for non primitive data type is called object data type such for function it will be like object function

// JavaScript is a dynamically typed language. This means that the data type of a variable is determined by the value that is assigned to it, rather than being explicitly declared. For example, if you assign a string to a variable, the variable will be of type "string". If you then assign a number to the same variable, the variable will change to be of type "number"  






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Notes

// Stack Memory and Heap Memory
// Primitive data type => Stack Memory
// Non Primitive data type => Heap Memory


let myYoutubeName = "adarshbadagaladotcom" 

let anotherName = myYoutubeName 

anotherName = "anotheradarshbadagaladotcom"

console.log(anotherName); // both are not same as they are passed as a value not reference
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user&ybl"
}

let userTwo = userOne 

userTwo.email = "user@yahoo.com"

console.log(userOne.email); // both have been changed as they are passed as the reference
console.log(userTwo.email);