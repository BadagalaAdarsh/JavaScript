// User is only allowed to make a purchase if he is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

if (isLoggedIn) {
    console.log("Logged in success");
    if (isEmailVerified) {
        console.log("Email is verified");
        if (cardInfo) {
            console.log("You can make a purchase");
        }
    }
}

// if (isLoggedIn && isEmailVerified && cardInfo) {
//     console.log("Allow user to make a purchase");
// } else {
//     console.log("You are not allowed to make a purchase");
// }

// if (isLoggedIn) {
//     console.log("Logged in success");
//     if (isEmailVerified) {
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can make a purchase");
//         }
//     }
// }
