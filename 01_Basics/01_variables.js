const accountId = 2025
let accountEmail = "mauryasatyam355@gmail.com"
var accountPassword = "2025"
accountCity = "Raebareli"
let accountState;

// accountId = 2024 "Not allowed"

accountEmail = "try@gmail.com"
accountPassword = "2024"
accountCity = "Hamirpur"

console.log(accountId)
/*
Prefer not to use var because of issue in block scope {} and fucntionn scope.
Always use const and let.
You can also decleare a variable without using any declertion in front of it but it is not advised.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
