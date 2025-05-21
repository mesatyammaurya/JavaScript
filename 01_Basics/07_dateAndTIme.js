// //Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23) // months starts from 0 
myCreatedDate = new Date("01-14-2023") // Here moth starts with 01
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // will give value in milliseconds with some reference from 1970
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // this is time in seconds 

// // there are so many getDate etc type methods to get many things 

// // so by get methods we can write date and time in desired format using string interpolation.
// // `${newDate.getDay()}`

myDate.toLocaleString('default', {
    weekday: "long"
}) /// this is very interesting method





