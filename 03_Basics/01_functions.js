// // Functions  : Package of some code

function sayName(){
    console.log("Satyam");
    console.log("Maurya");
    
}
// sayName  // Reference of a function
// sayName() // execution of a function

function add1(num1, num2){  // here num1 and num2 are parameters
    console.log(num1 + num2);
    
} 

// add1() // NaN
// add1(3, "4") // 34
// add1(3, "a") //3a   here vaues passed are arguments.

// const result1 = add1(4,9)  // 13
// console.log(result1);  // undefined : Why?

// // again same function.

function add2(num1, num2){  // here num1 and num2 are parameters
    let result = num1 + num2
    return result // this will save vlaue to any constant
    // lines after return will never get executed
}
const result2 = add2(4,9)  // nothing
// console.log(result2);  // 13

function loginMessage(username){
    return `${username} just logged in.`
}

// console.log(loginMessage("Satyam")); //Satyam just logged in.
// console.log(loginMessage());  // undefined just logged in.

function calculateCartPrice(val1, ...num1){ // Rest Operator (...) same as spread: allows multiple arguments.
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 200)); // [ 400, 600, 200 ]

const user = {
    name: "Satyam",
    price: 39
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
    
}
// handleObj(user)
handleObj({
    name: "Happy",
    price: 100
})

const myNewArr = [200, 400, 100, 300]

function returnSecondValue(arr){
    console.log(arr[1]);
}
// returnSecondValue(myNewArr)
returnSecondValue([100, 200, 3000, 4000])