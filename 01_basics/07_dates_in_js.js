// first moment starts at jan 1 , 1970
// dates calculated in milli seconds

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023, 0, 23); // month starts from 0
// if we give data some wrong number 32 it goes to next month automatically
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); // conversion of milliseconds to seconds
// use math.floor or math.round to avoid decimals

let newDate = new Date();
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday: "long"
})