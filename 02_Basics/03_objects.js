// // singleton :  when object is declared as literals then it is not fomed, but formed during custructor decleration.
// // Object.create 


// // object literals
const mySym = Symbol("Key1")

const jsUser = {
    name: "Satyam",
    "full name": "Satyam Maurya",
    [mySym]: "myKey1", // Symbol as key.
    age: 20,
    location: "India",
    email: "user@gmail.com",
    islog: false,
    lastLog: ["Monday", "Saturday"]
}

// console.log(jsUser.name); 
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]); // since full name can not be accessed.
// console.log(jsUser[mySym]); // Same for Symbol, can not accessed but dot.

jsUser.email = "satyam@email.com"
// console.log(jsUser.email); //satyam@email.com
// Object.freeze(jsUser)
jsUser.email = "freeze@email.com"
// console.log(jsUser.email); //satyam@email.com

// // fucntion decleration 
jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()) // Hello js user /n undefined
console.log(jsUser.greetingTwo()) // Hello js user, Satyam /n undefined





