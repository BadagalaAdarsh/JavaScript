/*
Define a function that can answer the role of a user. A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input: getUserRole(name, role)
*/

// Solution
function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
        case "user":
            return `${name} is user to consume all content`;
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("Adarsh", "admin"));
console.log(getUserRole("Adarsh", "subadmin"));
console.log(getUserRole("Adarsh", "testprep"));
console.log(getUserRole("Adarsh", "user"));
console.log(getUserRole("Adarsh", "other"));

// other way to write the above code

var getRole = getUserRole("Adarsh", "admin");
console.log(getRole);
