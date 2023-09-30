// https://youtu.be/9MfwYoWKKVE?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1639

const myNums = [ 1, 2, 3]

// generally used in scenarios like shopping kart
// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`accumalator: ${accumulator} and current value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0 );

// console.log(myTotal); // -> 6

const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0); // 0 is starting value of accumulator and we have to give it after the function return see above example for better understanding
console.log(myTotal); // -> 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// adding all the prices in the shopping cart

const priceToPay = shoppingCart.reduce( (accumulator, course) => accumulator + course.price, 0);

console.log(priceToPay);