// Show user a signout button if he is authenticated
// Other wise show him option to login/signup

var authenticated = true;

if (authenticated) {
    console.log("Show signout button");
} else {
    console.log("Show login option");
}

// or other way of doing the same using ternary operator
authenticated
    ? console.log("Show signout button")
    : console.log("Show login option");
