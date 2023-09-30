/*

if string has something then it is considered true, empty string is false
empty array is true


FALSY VALUES
false, 0, -0, BigInt 0n, "", null, undefined, NaN

TRUTHY VALUES
"0", 'false', "<space>", [], {}, function(){} 
*/

// For checking empty array and empty objects

const array = []

if(array.length === 0) {
    console.log("Array is empty");
}

// Check empty objects

const emptyObj = {}
// since object.keys return empty array and we can check the length of the array
if(Object.keys(emptyObj).length === 0) {
    console.log("Empty object");
}