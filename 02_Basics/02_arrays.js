// // Araay
const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel); //Array inside array not merge
// console.log(marvel);
// const allHeros = marvel.concat(dc) // Returns new arrys 
// console.log(allHeros);

const all = [...marvel, ...dc] // spread operator
// console.log(all); // Same ass concat

const anotherArr  = [1, 2, 3, [4, 5, 6,], 7, [8, 9, [10, 11]]]
const useableArr = anotherArr.flat(Infinity) /// flat(depth) depth - 1, 2,3.   
console.log(useableArr);

console.log(Array.isArray("Satyam")); // false
console.log(Array.from("Satyam")); //[ 'S', 'a', 't', 'y', 'a', 'm' ]
// // Intresting
console.log(Array.from({name: "Satyam"})); // [] since  it is confused what to make array keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







