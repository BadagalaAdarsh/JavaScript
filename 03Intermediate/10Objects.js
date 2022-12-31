// syntax of objects in java script

// var name = {
//     key1 : value1,
//     key2 : value2,
//     key3 : value3,
// }

var user = {
    firstName: "Adarsh",
    lastName: "Badagala",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
};

// we can use the dot notation to access the properties of the object
console.log(user.firstName);

console.log(user["lastName"]); // this is called bracket notation and we can use this to access the properties of the object but here we have to use the name of the property in quotes

// we can also update the properties of the object
user.loginCount = 44;
console.log(user.loginCount);

// print the whole object
console.log(user);

// we can also use table to print the object which is a better way to print the object
console.table(user);

// we can also add new properties to the object
user.age = 25;
console.log(user);

// we can also delete the properties of the object
delete user.age;
console.log(user);

// we can also use the bracket notation to add new properties to the object
user["isMarried"] = true;
console.log(user);

// we can also use the bracket notation to delete the properties of the object
delete user["isMarried"];
console.log(user);

// we can also use the bracket notation to update the properties of the object
user["loginCount"] = 55;
console.log(user);
