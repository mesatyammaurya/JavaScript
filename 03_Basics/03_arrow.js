// // This and Arrow

const user = {
    name: "Satyam",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hello ${this.name}, welcome to website`);
        // console.log(this); // prints current context of the object.
        
        
    }
}
// // this refers to present or current context.
// user.welcomeMessage() // Hello Satyam, welcome to website
// user.name = "Modi"
// user.welcomeMessage() // Hello Modi, welcome to website


const imp = 0
// console.log(this); // {} : we are Node environment and here this refers to an empty object.
// // but in browser environment this gives window object: which is a global object.

function chai(){
    let userename = "Hitesh"
    console.log(this);  // Inside any function this in Node environment gives a object with some information. 
    // // this.username gives undefined inside a function.
}
// chai()

const chai2 = () => {
    let userename = "Hitesh"
    console.log(this); // {} : here now again gives empty obejct in arrow function.
}
// chai2()


// // ******************************** Arrow Function **********************
// // () => {} basic arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(2,6));

// // Implicit Return 
const add2 = (num1, num2) => num1 + num2
const add = (num1, num2) => (num1 + num2) // () no return but in {} return is required.
// console.log(add2(2,6));
// console.log(add(2,70));

const objectReturn = () => ( {username: "Satyam"})
console.log(objectReturn());

// // Will be used in loop and many other examples.
