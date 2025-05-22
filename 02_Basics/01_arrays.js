// // Array (object)
// // They are resizeable, mix of data type.
// // Js array are not associative:  can not ne accessed using arbitary string. i.e array["one "] not allowed
// // SHallow copies are made when we copy array: same reference point.
// // Deep copies do not share same reference point.

// const myNUm = [0, 1, 2, 3, 4, 5]
const myArr = new Array(0, 1, 2, 3, 4)
// console.log(myArr[0]);

// // Array Methods
myArr.push(5)
// console.log(myArr);

myArr.pop()


myArr.unshift(9) // This add element at first place hence hve to move every elem so time consuming.
console.log(myArr);
myArr.shift() // pop of first
console.log(myArr);

// console.log(myArr.includes(0));
// //  myArr.indexOf

const newArr = myArr.join()
console.log(typeof newArr); // String


// // slice,  splice

console.log("A", myArr);

const arr1 = myArr.slice(1,4) // it does not remove elemnet from parent and does not keep last index
console.log(arr1);

console.log("B", myArr);


const arr2 = myArr.splice(1,4) // it removes element from parent elemnet and inclue last index also.
console.log("c", myArr);
console.log(arr2);








