var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray);

// syntax of fill is:
// array.fill(value, start, end)
// value is the value to be filled
// start is the index from where the value will be filled
// end is the index till where the value will be filled
// here start is inclusive and end is exclusive just like slice

console.log(testArray.fill("a", 2));

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

console.log(myNumber);

// filter expects a function to be call back
const result = myNumber.filter((num) => num != 55); // we can use any other operator like >, <, >=, <=, ==, ===, !=, !== etc. to filter the array

console.log(result);

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 3)); // this will return the array from index 1 to 2
// start is inclusive and end is exclusive, if only one argument is passed then it will return the array from that index to the end

// example of splice
users.splice(1, 3, "Hi", "Hello"); // this will delete 3 elements from index 1 and add "Hi" and "Hello" at index 1
// unlike slice, splice will change the original array and first argument is the index from where the elements will be deleted
// second argument is the number of elements to be deleted and the rest of the arguments are the elements to be added
// after removing the elements, the rest of the elements will be shifted to the left and we can add as many elements as we want
console.log(users);
