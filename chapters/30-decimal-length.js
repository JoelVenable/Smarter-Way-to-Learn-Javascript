// Price is $9.95.  Sales tax is 6.5%:

const taxRate = 0.065;
var price = 9.95;
var total = price + (price * taxRate);  // 10.59675

// But we need to round...

var roundTotal = total.toFixed(2);  // Uses normal rounding rules, and keeps two decimal places.

// HIDDEN SURPRISE: Rounding rules can change depending on the browser engine!!!!

var displayTotal = "$" + roundTotal; // "$10.60"  -- number is coerced to string!!


// Here's an inelegant fix for browser problems:

var str = total.toFixed(3).toString();
if (str.charAt(str.length - 1) === "5") {
  
  // If it finds a "5" as the last number, changes it to a six, to ensure proper rounding!
  str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);