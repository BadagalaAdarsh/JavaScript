const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// BASIC CALL BACK FUNCTION
// coding.forEach( function (val) {
//     console.log(val); // prints the values of the array
// } )


// This is using Arrow function
// coding.forEach((item) => {
//     console.log(item); // print the values again
// } )

// function printMe(item){
//     console.log(item);
// }


// coding.forEach(printMe) // again print the values of the array
// here we just have to give the reference, we don't have to execute like coding.forEach(printMe())


// Here for each loop we do have access to the index and the entire array
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); 
// })
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

// Objects inside the arra
// one of the common operation in regular work
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);  // print the language name of each object
})


