// var name;
// var name2;
// var name3; this is not idea way of declaring variables.

var countries = ["India", "USA", "Japan", "Russia"];

console.log(countries[1]); // this will print the second element of the array.

// other way of creating an array.
var states = new Array("Rajasthan", "Delhi", "Assam", "Goa");

// replace the element at the index 1.
countries[1] = "England";

console.log(countries.length); // this will print the length of the array.

countries.pop(); // this will remove the last element of the array.

countries.push("UK"); // this will add the element at the end of the array.

countries.shift(); // this will remove the first element of the array.

console.log(countries.indexOf("Japan")); // this will print the index of the element in the array.
// if the element is not present in the array then it will print -1.

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

// few important array methods available in javascript.
// 1. join() - this will join all the elements of the array into a string.
console.log(countries.join(" "));
// 2. slice() - this will return a new array with the elements from the index specified to the index specified.
console.log(countries.slice(1, 3));
// 3. splice() - this will remove the elements from the array from the index specified to the index specified.
console.log(countries.splice(1, 3));
// 4. reverse() - this will reverse the array.
console.log(countries.reverse());
// 5. concat() - this will concatenate the two arrays.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
// 6. sort() - this will sort the array.
console.log(arr1.sort());
// 7. toString() - this will convert the array into a string.
console.log(arr1.toString());
// 8. isArray() - this will check if the variable is an array or not.
console.log(Array.isArray(arr1));
// 9. indexOf() - this will return the index of the element in the array.
console.log(arr1.indexOf(2));
// 10. lastIndexOf() - this will return the last index of the element in the array.
console.log(arr1.lastIndexOf(2));
// 11. every() - this will check if all the elements in the array satisfy the condition or not.
console.log(
    arr1.every(function (element) {
        return element >= 2;
    })
);
// 12. some() - this will check if any of the elements in the array satisfy the condition or not.
console.log(
    arr1.some(function (element) {
        return element >= 2;
    })
);
// 13. find() - this will return the first element in the array which satisfies the condition.
console.log(
    arr1.find(function (element) {
        return element >= 2;
    })
);
// 14. findIndex() - this will return the index of the first element in the array which satisfies the condition.
console.log(
    arr1.findIndex(function (element) {
        return element >= 2;
    })
);
// 15. filter() - this will return the array with the elements which satisfies the condition.
console.log(
    arr1.filter(function (element) {
        return element >= 2;
    })
);
// 16. map() - this will return the array with the elements which satisfies the condition.
console.log(
    arr1.map(function (element) {
        return element * 2;
    })
);
// 17. reduce() - this will return the array with the elements which satisfies the condition.
console.log(
    arr1.reduce(function (accumulator, element) {
        return accumulator + element;
    })
);
// 18. reduceRight() - this will return the array with the elements which satisfies the condition.
console.log(
    arr1.reduceRight(function (accumulator, element) {
        return accumulator + element;
    })
);
// 19. fill() - this will fill the array with the element specified.
console.log(arr1.fill("Adarsh"));
// 20. copyWithin() - this will copy the elements from the index specified to the index specified.
console.log(arr1.copyWithin(1, 2));
// 21. entries() - this will return the array with the elements which satisfies the condition.
console.log(arr1.entries());
// 22. keys() - this will return the array with the elements which satisfies the condition.
console.log(arr1.keys());
// 23. values() - this will return the array with the elements which satisfies the condition.
console.log(arr1.values());
// 24. flat() - this will return the array with the elements which satisfies the condition.
console.log(arr1.flat());
// 25. flatMap() - this will return the array with the elements which satisfies the condition.
console.log(
    arr1.flatMap(function (element) {
        return element * 2;
    })
);
// 26. includes() - this will return the array with the elements which satisfies the condition.
console.log(arr1.includes(2));
// 27. from() - this will return the array with the elements which satisfies the condition.
console.log(Array.from("Adarsh"));
// 28. of() - this will return the array with the elements which satisfies the condition.
console.log(Array.of(1, 2, 3));
// 29. toLocaleString() - this will return the array with the elements which satisfies the condition.
console.log(arr1.toLocaleString());
// 30. Symbol.iterator - this will return the array with the elements which satisfies the condition.
console.log(arr1[Symbol.iterator]());
// 31. @@iterator - this will return the array with the elements which satisfies the condition.
console.log(arr1[Symbol.iterator]());
