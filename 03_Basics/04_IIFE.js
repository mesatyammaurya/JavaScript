// // Immediately Invoked Function Expressions (IIFE)
// // To reduce global scope pollutin IIFE is used.

(function chai(){
    console.log('DB Connected');
    
})();
// //  Above function is named IIFE 

// //  (function here)() : this is samle templeate for IIFE
(()=>{
    console.log(`DB Connected 2`);
    
})();
// // Always add a ; after IIFE since system does not when to stop function, so it will give errors.
