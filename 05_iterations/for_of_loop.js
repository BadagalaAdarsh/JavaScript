
// For loop for arrays

// for of 


const arr = [1,2,3,4,5]

// basic syntax
// for (const iterator of object) {
    
// }

// for (let num of arr) { // similar to for i in array of python
//     console.log(num);  // any change in num doesn't change original value
// }

// Maps
// these are just hash map, it keeps order on insertion
// all are unique values
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India") // this one doesn't go in
// map is not a interable so only for of loop is used 

console.log(map)
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States Of America',
  'Fr' => 'France'
}
*/

// for(const key of map){
//     console.log(key)

// }
    /*
    [ 'IN', 'India' ]
    [ 'USA', 'United States Of America' ]
    [ 'Fr', 'France' ]
*/

// for(const [key, value] of map) {
//     console.log(key, ':-', value) ;
// }
/*
IN :- India
USA :- United States Of America
Fr :- France
*/


const myObject = {
    'game1' : "NFS", 
    'game2' : "GTA",
    'game3' : "SpiderMan"
}

// for(const [key, value] of myObject) {
//     console.log(key, '-', value);
// }
// TypeError: myObject is not iterable


