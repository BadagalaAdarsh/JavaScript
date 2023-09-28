const tinderUser = new Object(); // single ton object
// const tinderUser = {} // non single ton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"adarsh",
            lastname:"badagala"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2} // gets two objects
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// the above example, it returns as well modifies obj1
// optional parameter {}
// const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

/* MDN doc example

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target,source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

*/

const obj3 = {...obj1, ...obj2}; // 90 percent we use this
// console.log(obj3);

// when we get values from DB we use these in general

const users = [
    {
        id: 1,
        email: "adarsh@gmail.com"
    },
    {
        id: 2,
        email: "badagala@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);


// console.log(Object.keys(tinderUser)); // returns array with keys as string
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); // used very less , return array such as [key, value]
// output => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return boolean, check if the object as a property or not

// to get more methods on the objects 
// browser -> inspect -> console


const course = {
    courseName : "Java script",
    price: "999",
    courseInstructor: "Hitech Choudhary Sir"
}

// course.courseInstructor
// below is just a syntactical sugar
// we can use the usual dot operator as well
// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseInstructor : instructor } = course
// console.log(instructor);


// BELOW IS JSON
// here keys have to be string
// Generaly api returns in JSON
// {
//     "name": "adarsh",
//     "coursename": "Java Script",
//     "price": "free",
// }


// Sometimes API returns array of objects 
// we can use random user me