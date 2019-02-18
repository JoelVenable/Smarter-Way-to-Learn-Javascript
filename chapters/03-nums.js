var weight = 150;

console.log(weight + 25);  // 175



var originalNum = 23;

var newNum = originalNum + 7; 

console.log(newNum);  // 30



var numToAdd = 7;

newNum = originalNum + numToAdd; 

console.log(newNum);  // 30


//  A variable can be used in calculating its own new value.

var num3 = 90;
num3 = num3 + 10;  

console.log(num3);  // 100

//  or...

var num4 = 90;
num4 += 10;

console.log(num4);  // 100



//  Numbers stored as strings...

var num5 = "23";

var newNum5 = num5 + 7;

console.log(newNum5);   // 237   (Not 30! - String was concatenated, no math happened).



//var 1stPresident = "Washington"  - would error: vars cannot start with a number.

console.log(155);  // 155  - JS converts to a string to display.


