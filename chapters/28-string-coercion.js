//var currentAge = prompt("Enter your age.");
var currentAge = 32;
// the value returned by a prompt is a string as we covered earlier.

var yearsEligibleToVote = currentAge - 18;  // currentAge is temporarily coerced to a number.

console.log(yearsEligibleToVote);

var profit = "200" - "150"; // the numbers as strings are coerced to numbers to perform the calculation. 

console.log(profit);  // 50

var calc = "200" - "duck";  

console.log(calc);  // NaN  ("not a number")

// What gets interesting is when you MIX numbers with numerical strings:

var whoops = "200" + 150;  

console.log(whoops);  // 200150 - 150 is coerced to a string and the result is concatenated!

// So here's another 'whoops':

var yourAge = /*prompt("Enter your age:"); */ "32";

var qualAge = yourAge - 1;  // qualAge will be "321"

// So to force type coercion to happen a certain way use this:

var numAge = parseInt(yourAge);

// parseInt() does not round.  It simply chops off any decimals. Thus:

var preciseNumString = "1.71357120";
var newNum = parseInt(preciseNumString);
console.log(newNum);  // 1

// To preserve the precision, use parseFloat():

var preciseNewNum = parseFloat(preciseNumString);

console.log(preciseNewNum);  // 1.71357120


// To minimize confusion it's often best to perform explicit coercion even when not required by JS.