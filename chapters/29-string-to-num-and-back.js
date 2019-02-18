// parseInt() and parseFloat() are used to convert strings to numbers, but how to go the other way?

var intAsString = "24";
var num = Number(intAsString);  // 24


// Also floats...

var floatAsString = "24.1825791"
var num2 = Number(floatAsString); //  24.1825791

// But how do we add commas to present large numbers to users i.e. 123,456,789.0?

var bigNum = 12345;
var numAsString = bigNum.toString();  // "12345"

// Then we'd use the splice() method to add commas, etc.
