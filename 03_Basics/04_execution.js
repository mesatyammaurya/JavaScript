// // How does javascript execute code + call stack.
// //  js is single threaded
// // Javascript Execution Context
// => 1) Global Execution Context
// => 2) Function Execution Context
// => 3) Eval Execution Context: this is actually property of 1 i.e. GEC

// // Now Phases
// 1) Memory creation phases or creation phase: Only places are allocated for all declerations.
// 2) Execution phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// // Now will see how this is executed

// 1) GEC: this code will be allocated in "this" context
// 2) Memory Phase: val1 = undefined, val2 = undefined, addNum = definition(everythin under function will be in this), result1 = undefined, result2 = undefined.
// 3) Execution Phase: val1 = 10, val2 = 5, addnum = skipped (since there is nothing to execute).
// // now for line 18 of code result1 = (differet new execution context here)
                                        // // [new environment + execution context] new this context
                                        // // now memory creation and execution phase will be again re-initiated,
                                        // // 1) Memory Phase: val1 = undefined, val2 = undefined, total = undefined
                                        // // 2) Execution Phase: num1 = val1 = 10 and same for num2 and total = 15 .
                    // // now total will return total
                    // // New execution context will get deleted.
// // result1 = 15

// // now for line 19 of code result2 = (differet new execution context here)
                                        // // [new environment + execution context] new this context
                                        // // now memory creation and execution phase will be again re-initiated,
                                        // // 1) Memory Phase: val1 = undefined, val2 = undefined, total = undefined
                                        // // 2) Execution Phase: num1 = val1 = 10 and same for num2 and total = 12 .
                    // // now total will return total
                    // // New execution context will get deleted.
// // result2 = 12


// // ***************************** Call Stack ******************************************

// [                            ]
// [                            ]
// [                            ]
// [                            ]
// [                            ]
// [                            ]
// [                            ]
// [        two()               ]
// [        one()               ]
// [Global Execution/environment]
// // Here LIFO happens  :  last in first out.