// // Scope

// let a = 10 // Global Scope
// const b = 20
var c = 300

// // All three can be logged here easily, without any problem.
// // {} == Scope 
if (true){
    let a = 10  // Block Scope
    const b = 20
    var c = 30 // Global Scope
    d = 40 // Global Scope
}
// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // 30 

// // code environment (Node) and   browser environment have different scope.

// // ******************nested scope ****************************

function one(){
    const name = "Satyam"

    function two(){
        website: "Youtube"
        console.log(name);
    }
    // console.log(website);
    two()
}
// one()

// // Child can access parents ice-cream but parent can't access children's ice-cream.

// // **************************** Intresting Example ******************************

console.log(add1(5)); // 6 : : No problem

function add1(num){
    return num +1
}

// console.log(add2(5));  //  Cannot access 'add2' before initialization/ decleration

const add2 = function(num){
    return num + 2
}

// // Both are function decleration but little difference