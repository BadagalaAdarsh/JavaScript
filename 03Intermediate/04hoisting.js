var num = 2;

function sayMe() {
    console.log("Say Me");
}

sayMe();

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("5");
tipper(5);

function bigTipper(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");
bigTipper(200);
