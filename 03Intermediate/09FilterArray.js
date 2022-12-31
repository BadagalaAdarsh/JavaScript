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
