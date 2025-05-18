// Tyeps of data are defined on the basis of how they are stored and accessed in the memory and from the memory.

// 1) Primitive
//  7 Types in them ( Call by Value).
// String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber =  345037535873573n // this is BigInt Type 


// 2) Reference (Non Primitive) (Call by reference)
// Array, Objects,  Functions 

const heroes = ['Shaktiman', 'Naagraj']
let myObj = {
    name: "Satyam",
    age: 21
}
const myFunction = function(){
    console.log("Hello world")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3
// scope of var is global even if it is defined inside a block but it does not happen in case of let and const
// const and let have block level scope


// is js staticalyy typed or dynamically typed? Dynamically typed.



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack Vs Heap
// Stack (Primitive) => Here we get a copy og value, Heap (Non-Primitive) => Here we get a refrence of the original value.

let myName = 'Satyam Maurya'
let anotherName = myName
anotherName = "Hello Bande"

console.log(myName)
console.log(anotherName)

let user1 = {
    name: "Satyam",
    age: 21
}

let user2 = user1
user2.age = 23

console.log(user1.age)
console.log(user2.age)
