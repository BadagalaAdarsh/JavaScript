console.log(this); // this will print the {} object in the console as we are using node which used v8 engine which is a javascript engine.
// on the browser console this will print the window object.
// this is a keyword which is used to refer to the current execution context.
// this is not a variable, it is a keyword.
// this is not a reserved keyword, it is a special keyword.
// this is not a property of the window object, it is a special keyword.

var game = "basketball";

function sayName() {
    var name = "Adarsh";
    console.log(this); // this is gonna print so many things in the console as this is related to the current execution context.
}

sayName();
