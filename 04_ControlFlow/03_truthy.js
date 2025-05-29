// // Truthy or Falsy

const useremail = "hello@email.com"

// if (useremail) {
//     console.log('it does exist');
// }else{
//     console.log('it does not');
// }// Here useremail is assumed to be true.

// // Rules for truthy anf falsy values.

// // Falsy : all given below are flasy except that are truthy.

// // false, 0, -0,  BigInt 0n, '', null, undefined, NaN 

// // truthy values.
// // "0", "false", " ", [], {},  function(){}, 

// // how to check if arr and object are empty.

const arr = []
const obj = {}
// if (arr.length === 0) {
//     console.log('Yes Empty');
    
// }
// if (Object.keys(obj).length === 0) {
//     console.log('Yes Empty');
    
// }

// // Nullish Coalescing Operator (??) : null, undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
// // if it get value the assign either assign null
// // it is made only for null and undefined
// console.log(val1); // 10
 
// // alwasy first value which it get will be assigned.
val1 = null ?? 20 ?? 10
// console.log(val1); /// 20


// // Terniary Operator
// condition ? true : false
const ice = 100

ice >= 80 ? console.log('more than 80') : console.log('less than 80');


