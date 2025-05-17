// console.log(2>=1);

// console.log("2">1);
// console.log("02" >1);
// always use same data types

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null<=0); //true
console.log(null<0); //false
// since comparison converts null to zero hence it becomes true in case of >= or <=
console.log(undefined<=0);
console.log(undefined >=0);
// this always gives false
// avoid all these conversion 

// # Strict Check - (===), it also checks data types.
console.log("2"===2); // false


