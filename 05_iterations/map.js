
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// map applies something to every element 
// map returns everything 
// const newNums = myNumers.map( (num) => num + 10)
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/
// console.log(newNums)

// const newNums = myNumers.map( (num) => num + 10)
/*
[
  false, false, false,
  false, false, true,
  true,  true,  true,
  true
]
*/

// Chaining

// here the flow is from top to bottom
// first number is multiplied by 10
// then we add 1 to each num
const newNums = myNumers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)




console.log(newNums);