// Looping Objects
// FOR IN LOOP
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

// for(const key in myObject){
//     console.log(key);
// }
/*
js
cpp
rb
swift
*/


// for(const key in myObject) {
//     console.log(myObject[key]);  // Here using dot (.) notation gives the error
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming){
//     console.log(key);
// }
/*
Here it only prints the keys of the array which is nothing but the index
0
1
2
3
4
*/

// for(const key in programming) {
//     console.log(programming[key]); // Here we can print the actual values
// }


const map = new Map()
map.set('IN', "INDIA");
map.set('USA', "United states")

// map is not iterable so for in loop can't be used
for(const key in map) {
    console.log(key); // doesn't print anything over here
}

// For OF Loop -> array, map
// For In -> Objects

