let score ="33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);

console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

//Boolean  Conversion
let isLoggedIn =1

let booleanIsLoggendIn =  Boolean(isLoggedIn)
console.log(booleanIsLoggendIn);

// 1=>true; 0 => false
// "" => false
// "akriti" => true

// string Number

let somenumber =33

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);



//***************Operations*****************************

let value =3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/2);
//console.log(2%2);

// 1. problem code solve

let str1 = "hello"
let str2 = "world"


let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 =  num2  = num3 = 2+2

let gameCounter =100
gameCounter++;
console.log(gameCounter);

let num4, num5, num6
num1 = num2 = num3 =10+10

let gameCounters=100;
++gameCounters;
console.log(gameCounters);

// Increment Operater
let x = 7;
const y = x++;

console.log(`x:${x}, y:${y}`);

// Expected output : "x:8, y:7"

let a = 3;
let b = a++;
console.log(`a:${a}, b:${b}`);
// Expected  output : "a:4, b:3"

// Postfix increment 

let c = 3;
let d = a++;
console.log(`c:${c}, d:${d}`);

//Expected output:- "c:3, d:3"  

let e = 5n;
const f = e++;
console.log(`e:${e}, f:${f}`);

//Expected output:- e:6n, f:5n



