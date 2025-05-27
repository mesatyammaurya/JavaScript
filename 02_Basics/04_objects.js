// Object Constructor

const tinderUser = new Object() // singleton Object 
// // const tinderUser = {}  // Non-Singleton Object
//  console.log(tinderUser); //  {} will gave same output as literal decleration. 

tinderUser.id = "abc123"
tinderUser.name = "Anom"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const user = {
    email: "user@email.com",
    fullname: {
        userFullname: {
            firstname: "Satyam",
            lastname: "Maurya"
        }
    }
}
// console.log(user.fullname.userFullname.firstname);  // nested accessing

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1, obj2} // object inside object not merge
// const obj3 = Object.assign({}, obj1, obj2) // {} this optional param,  it gaurantees tagret as {} since .assign(target, source)
const obj3 = {...obj1, ...obj2} // spread operator 90% of the time this is used
// console.log(obj3);

// when value is coming from datbase
const users = [
    {
        id: 1,
        name: "Satyam"
    },
    {
        id: 2,
        name: "Hello"
    }
]
// console.log(users[1].name);
// console.log(tinderUser);

// // Intresting and imporant
// console.log(Object.keys(tinderUser)); // give Array of keys
// console.log(Object.values(tinderUser)) // Array of values
// console.log(Object.entries(tinderUser)) //[ [ 'id', 'abc123' ], [ 'name', 'Anom' ], [ 'isloggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isloggedIn")); // true

// ********************* De-structuring of objects ***********************
const course = {
    name: "Js in Hindi",
    price: "999",
    instructor: "Hitesh"
}

// // course.instructor ***** de-structuring
const {instructor: inst} = course // accessing a key with this syntax by de-structuring
// // Arrays can also be destructured
console.log(inst);

// // ***************** API ***************** Apna kaam kisi aur ke sir pe daal dena.
// // API gives backedn value now in json {} ealier it was in XML.

// {                                              // this is json object.
//    "name": "Satyam",
//     "coursename": "Js in hindi",
//     "price": "free"
// }
// // sometimes we get API respone in form Array: like below. //json formattor is used to make understandable.
[
    {},
    {},
    {}
]












