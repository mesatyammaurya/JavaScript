let score = undefined

console.log(typeof score);
console.log(typeof(score));
// both will work

let valueInNumber = Number(score) //converts null to 0
console.log(typeof valueInNumber); //returns number even when string not convetable to integer is passed as score
console.log(valueInNumber); // NaN => Not a number; but will give number type for string not convertable to int,undefined.

// examples
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0, null => 0
// undefined => NaN

let isLoggedIn = "12"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
//  "" => false
// "somevalue" => true
// 0 => flase

let someValue = 39
let stringNumber = String(someValue)
console.log(stringNumber);
console.log(typeof stringNumber);

let objectNumber = Object(someValue)
console.log(objectNumber);





