const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toFixed(2));

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3)); 
// 23.8966 => 23.9
// 123.8966 => 124
// 1123.8966 => 1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // by defalult in US standard
// to get more details on the other standards looks mdn docs



// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math); // to know actual object value browser => inspect => console.log 

// console.log(Math.abs(-4));
// console.log(Math.round(4.49));

console.log(Math.random()) // default value of random is always between 0 to 1
console.log((Math.random()*10) + 1); // we add plus one so that the value can't be 0, we get 0 when random returns 0.0<somenumber>


const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min)