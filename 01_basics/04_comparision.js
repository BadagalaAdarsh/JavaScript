// console.log(2 > 1);

// and there are other different basic arithmatic equations2


console.log("2" > 1); // => true
console.log("02" > 1); // => true but its better to convert the datatype

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// these kind of questions are good for exams and interviews but in general its not a good practice to use them
console.log(undefined == 0); // false

// === strict check not only value but also data type

console.log("2" == 2);
console.log("2" === 2);