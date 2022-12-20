// Create an application with following roles:
// 1. Admin - Full Access
// 2. SubAdmin - Access to create/delete courses
// 3. TestPrep - Access to create/delete tests
// 4. User - consume all content
//

var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;

    case "subadmin":
        console.log("You get access to create/delete courses");
        break;

    case "testprep":
        console.log("You get access to create/delete tests");
        break;

    case "user":
        console.log("You get access to consume content");
        break;

    default:
        console.log("Trial user");
        break;
}
