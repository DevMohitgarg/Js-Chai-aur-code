const accountId = 2212003
let accountEmail = "mohit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail="garg@google.com"
accountPassword = "14965"
accountCity = "Alwar"

console.log(accountId);
/*
Prefer not to use var
because of issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);