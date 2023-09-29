// Global scope is different in node and browser window

// let a = 10
// const b = 20
// var c = 30 // FYI doesn't work in block scope 

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// var c = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30 
    // we have problem of modifing c even we write it as
    // c = 30
}

// console.log(a); // -> Error
// console.log(b); // -> Error
// console.log(c); // -> 30 , we can print value which is problematic
// though we have c as 300 before we still get 30 as the value


function one() {
    const username = "adarsh";

    function two() {
        const website = "youtube"
        console.log(username);

    }
    // console.log(website); // -> Error

    two();
}

// one();

if (true) {
    const username = "adarsh";

    if (username === "adarsh") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);



// +++++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // does work even called before declaration

function addone(num) {
    return num + 1;
}

// addone(5); // doesn't print as there is no console

// addTwo(5); // error can't access before declaring
const addTwo = function(num) {
    return num + 2;
}

// addTwo(5);