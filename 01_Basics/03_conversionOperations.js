// let score = undefined

// console.log(typeof score);
// console.log(typeof(score));
// // both will work

// let valueInNumber = Number(score) //converts null to 0
// console.log(typeof valueInNumber); //returns number even when string not convetable to integer is passed as score
// console.log(valueInNumber); // NaN => Not a number; but will give number type for string not convertable to int,undefined.

// // examples
// // "33" => 33
// // "33abc" => NaN
// // true => 1; false => 0, null => 0
// // undefined => NaN

// let isLoggedIn = "12"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// // 1 => true
// //  "" => false
// // "somevalue" => true
// // 0 => flase

// let someValue = 39
// let stringNumber = String(someValue)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************************* Operations  *************************************

let value = 3
let negValue = -value
// console.log(negValue);
// Basic maths operations +, -, *, **, /, % etc
let str1 = "Hello"
let str2 = " Satyam"
let str3 = str1 + str2
console.log(str3);
//Concatenation
console.log("1" + 2);
console.log(1 + "2");
// both gives 12
console.log("1"+2+3); //123  string first then every argument will be treated as string 
console.log(1+2+"3"); //33
console.log('3' * '4') // gives 12 since * does not have any meaning in strings
// Never write this type of code 

console.log(+true); //1
console.log(+""); //0

let count = 100
count ++
++ count
// both prefix and postfix, work here to increment value by 1, read more about this in js mdn.
console.log(count) //102






