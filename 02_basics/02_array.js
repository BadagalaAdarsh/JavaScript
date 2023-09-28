const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros); // array inside array just like python append [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// push modifies existing array
// console.log(marvelHeros)

// const allHeros = marvelHeros.concat(dcHeros); // doesn't modify current array
// console.log(allHeros);

// spread operator
// people prefer spread over concat, mostly used
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

// below is rarely used

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity); // inside flat usualy we need to give depth of which where we want to flat the array, use infinity if we don't know and want to entire array

console.log(realAnotherArray);


// below is used most of the times

console.log(Array.isArray("Adarsh")); // boolean
console.log(Array.from("Adarsh")); // converts to array
// gives empty array for boolean
// null, undefined => error

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // converts to array