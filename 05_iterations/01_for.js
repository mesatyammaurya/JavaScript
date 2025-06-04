// // For

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}


// // Loop inside loop

// for (let i = 0; i < 10; i++) {

//     for (let j = 0; j < 10; j++) {
//         // console.log(`${j} is inner loop value and ${i} is outer loop value`);
        
//     }
    
// }
// // if we get out of array index then  it will set its value to undefined.

// // break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");  
        break
    }
    console.log(i);
    
}

// // continue is like ignore once then start behaving same.
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");  
        continue
    }
    console.log(i);
    
}
