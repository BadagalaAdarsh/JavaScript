// var name;
// var name2;
// var name3; this is not idea way of declaring variables.

var countries = ["India", "USA", "Japan", "Russia"];

console.log(countries[1]); // this will print the second element of the array.

// replace the element at the index 1.
countries[1] = "England";

console.log(countries.length); // this will print the length of the array.

countries.pop(); // this will remove the last element of the array.

countries.push("UK"); // this will add the element at the end of the array.

countries.shift(); // this will remove the first element of the array.

countries.unshift("Germany"); // this will add the element at the beginning of the array.

console.log(countries);

// this is the way of iterating over the array.
for (var i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

// this is the way of iterating over the array.
countries.forEach(function (element) {
    console.log(element);
});

// this is the way of iterating over the array.
for (var element of countries) {
    console.log(element);
}

// this is the way of iterating over the array.
for (var index in countries) {
    console.log(countries[index]);
}

var user = ["Adarsh", "badarsh2001@gmail.com", 3, 34, true]; // this is not a good way of creating an array. though it is possible.
// there are other data structures in javascript which are more efficient than arrays for holding multiple data types.

console.log(user);
