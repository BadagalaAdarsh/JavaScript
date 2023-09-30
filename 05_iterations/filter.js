// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values); // -> undefined
// for each does not return any value even if we keep return in it


const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// })
// above we have score so we need to use explicit return

// const newNums = myNums.filter( (num) => num > 4) // we can have call back function in the filter
// above we have used implicit return so no need to write the return key word

// If we are using filter on array of object and we are checking a particular field of object such as

const books = [
    {
        one: "one",
        two: "two",
        publishDate: "some date"
    },
    {
        one: "one",
        two: "two",
        publishDate: "some date"
    },
]

let userBook = books.filter( (bk) => bk.publishDate >= 1995) // Here it is going to return the entire object which satisfies the condition , instead of just the dates



// Below is the example of having same result, as like filter
// here we use const for new nums but still we can add values to the array , because we are not modifiying the reference of the array, we are adding values to the existing array
// because array is non primitive and reference based
const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
})
 

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

