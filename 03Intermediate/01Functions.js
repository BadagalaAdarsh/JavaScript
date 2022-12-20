function sayHello(name) {
    console.log("Hello " + name);
    console.log(`Hello ${name}, How are you doing`); // Template String
}

sayHello("Adarsh");

// another example

function namastey() {
    return "Hello in India";
}

let greetings = namastey();
console.log(greetings);
console.log(namastey());
