// singleton -> created using constructor
// Object.create // constructor based and singleton
// when created using literals it is not a singleton


// OBJECT LITERALS
// by default keys are string 

// mostly we use dot (.) to access the object values in special cases we have to use brackets

const mySym = Symbol("key1") 

const JsUser = {
    name: "Adarsh",
    "full name": "Adarsh Badagala", // can't access this key using dot (.)
    [mySym]: "myKey1", // syntax to use symbol as key
    age : 22,
    location: "Chennai",
    email: "badarsh2001@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // this is not sahi tareeka
console.log(JsUser["email"]); // another way of accessing object values

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "adarshbadagala@google.com"; // changing values of object
// Object.freeze(JsUser); // freezing values , does'nt change the value nor it gives any error
// can't add new values at
JsUser.email = "checking";

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting()); // if we do JsUser.greeting then we get reference of the function
console.log(JsUser.greetingTwo());