var name = "Adarsh";

console.log("Line number 3", name);

function sayName() {
    console.log("Line number 6 ", name); // here this method will look for the name variable in its own scope, if it is not found then it will look for the name variable in the global scope.

    sayNameAgain();

    function sayNameAgain() {
        var name = "Mr. Adarsh"; // this name variable is in the scope of sayNameAgain() method.
        // if it was absent then it would have looked for the name variable in the global scope or in the scope of sayName() method.
        // you can always go up the scope chain but you can never go down the scope chain.
        console.log("Line number 10 ", name);
    }
}

sayName();
