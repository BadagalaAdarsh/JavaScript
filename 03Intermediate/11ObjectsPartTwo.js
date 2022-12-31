var user = {
    firstName: "Adarsh",
    lastName: "Badagala",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    info: function () {
        return `
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Role: ${this.role}
        Login Count: ${this.loginCount}
        Facebook Signed In: ${this.facebookSignedIn}
        Course List: ${this.courseList}
        `;
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.info());
console.table(user); // This will print the object in a table format
// since the object has methods and array too it will print all the values in the table
