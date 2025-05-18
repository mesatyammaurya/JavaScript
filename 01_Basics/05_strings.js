const name = "Satyam Maurya"
const repoCount = 7 

// console.log(name + repoCount + " Value") // not suggested

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Satyam-Uno-1') // Another way of defining string
// 
console.log(gameName[0]);
console.log(gameName.__proto__); // {} actually its not empty

//Some Intresting Methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,5) // No negative values are allowed.
console.log(newStr);

const anotherString = gameName.slice(-8,4) // Slice can take negative values also.
//Slice is used mostly
console.log(anotherString);


const newStr1 = "    Satyam Maurya  "
console.log(newStr1);
console.log(newStr1.trim()); // remove starting and trailing spaces (triStart() and trimEnd() also exist.)
// works only on white space characters an line terminantors (\n)

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes("hitesh"));

console.log(gameName.split('-'));







