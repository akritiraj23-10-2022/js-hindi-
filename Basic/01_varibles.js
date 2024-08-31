const accountId = 144553
let accountEmail = "akriti@google.com"
var accounPassword = "12345"
var accountCity = "gaya"
let accounState;

// accountId  = 2 // not allowed

accountEmail = "hc@hc.com"
accounPassword ="21212121"
accountCity="Delhi"

console.log(accountId);

/* 
Prefer not to use var 
Because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accounPassword ,accountCity,accounState]) 