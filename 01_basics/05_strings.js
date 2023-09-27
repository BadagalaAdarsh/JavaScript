const name = "adarsh"
const repoCount = 50

console.log(name + repoCount + "value");
// below syntax is called string inter polation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// different way of initiatig string
const gameName = new String('adarshgame');

console.log(gameName);
// defining string via new String gives acess to much more methods

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4); // [ start position, end position)
console.log(newString); 

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // negative in slice is same as pythong can't use with sub string and gives result starting from 0 as start

const newStringOne = '      adarsh.     '
console.log(newStringOne);
console.log(newStringOne.trim()); // to remove the extra spaces


const url = "https://adarsh.com/adarsh%20badagala"
console.log(url.replace('%20','-'));
console.log(url.includes('adarsh'))