// in java script variable name should not start with a number
var num1 = 7;
var num2 = 6;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

var answer = num1 > num2;
console.log(answer);

// another example of using the operator with Bodmas

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount percentage is: " + discountPercent);

// display the discount percentage with 2 decimal places
console.log("Discount percentage is: " + discountPercent.toFixed(2));

// other way of doing the above line
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");

// it looks like we can use the variables with out acutally giving the var key word
// but it is not a good practice to do so
// it is better to use the var key word
