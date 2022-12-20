var temperature;

//TODO: Go to google and get the data

// in javascript == is used for comparison and = is used for assignment
// === is used for strict comparison ( 20 === "20" is false)
// == is used for loose comparison ( 20 == "20" is true)

temperature = 20;

if (temperature < 20) {
    console.log("It is very cold outside");
}

if (temperature < 30) {
    console.log("It is moderate outside");
}

if (temperature < 40) {
    console.log("It is hot outside");
}

// if else statement
if (temperature < 20) {
    console.log("It is very cold outside");
} else {
    console.log("It is moderate outside");
}

// if else if else statement
if (temperature < 20) {
    console.log("It is very cold outside");
} else if (temperature < 30) {
    console.log("It is moderate outside");
} else {
    console.log("It is hot outside");
}

// if else if else statement
if (temperature < 20) {
    console.log("It is very cold outside");
} else if (temperature < 30) {
    console.log("It is moderate outside");
} else if (temperature < 40) {
    console.log("It is hot outside");
} else {
    console.log("It is very hot outside");
}
