sayHello(); // This will not give any error, because of the global context

function sayHello() {
    console.log("Hello");
}

sayHello();

var myName = "Adarsh";

if (myName === myName) {
    console.log("This is a true statement"); // This will print here because of the global context
}

if (myName === window.myName) {
    console.log("This is a true statement"); // This will not print here because of the global context is not the same as the window context
    // This will print in the browser console
    // This will not print in the node console
    // This will give error in the node console saying that window is not defined
}
