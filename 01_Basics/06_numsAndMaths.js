const score = 400 
const balance = new Number(100)

console.log(score); // 440
console.log(balance);  // [Number: 100] 

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00 fixed precision value

const otherNum = 123.88945
console.log(otherNum.toPrecision(4)); // On using this it only give precison vlaue of specified no. of digits


const myNum = 10000000
console.log(myNum.toLocaleString('en-IN')); //1,00,00,000

// Number.MAX_VALUE , Number.MIN_VALUE aare maxm and minm value of number
// MAX_SAFE_INTEGER, MIN_SAFE_INTEGER 

// // ++++++++++++++ Math +++++++++++

console.log(Math); //Object [Math] {}
// //.PI , sqrt

console.log(Math.abs(-4));
console.log(Math.round(4.36));
console.log(Math.ceil(3.2));
console.log(Math.floor(4.9));
// // // all give 4
console.log(Math.min(4,5,6,1,2));
console.log(Math.min(1,.02,1,5));

// /// Random
console.log((Math.random()*10) +1); // can manipulate to give any random number

const min = 10 
const max = 20 
console.log(Math.floor((Math.random() * (max -min + 1)) + min));

















