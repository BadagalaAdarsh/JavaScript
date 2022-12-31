// different ways of writing for loops  in javascript

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// for of loop
const names = ["Adarsh", "Badagala", "Adarsh Badagala"];
for (const n of names) {
    console.log(n);
}

// for in loop
const user = {
    firstName: "Adarsh",
    lastName: "Badagala",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
};

for (const key in user) {
    console.log(key, user[key]);
}

// for each loop
names.forEach(function (n, index) {
    console.log(index, n);
});

// for each loop using arrow function
names.forEach((n, index) => {
    console.log(index, n);
});

var states = [
    "Andhra Pradesh",
    "Telangana",
    "Karnataka",
    56,
    "Tamil Nadu",
    "Kerala",
];

for (let i = 0; i < states.length; i++) {
    if (typeof states[i] !== "string") break; // here not equal to string is a condition which has two equal to signs
    console.log(states[i]);
}
