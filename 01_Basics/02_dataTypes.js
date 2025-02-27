"use strict"; // Treat all JS code as newer version.
// alert(3+3) this does not work in nodejs , it can work on browser.

console.log(3
    +3) // Can work in this way too but readability should be high  so will avoid that.
// Documentation - ECMA(tc39.es) script, or mdn (Mostly use that)

let name = "Satyam Maurya" // string
let age = 20  //number
let isLoggedIn = false // boolean

/* Data-Types */
// number => 2**53
// bigint => 
// string => ""
// boolean => true/false
// null => stand-alone value i.e empty 
// undefined => value is not defined yet.
// symbol => used when dealing with unique values.

/* object */
console.log(typeof null) // Output =>  object, since it is object in JS
console.log(typeof undefined) // Output => undefined