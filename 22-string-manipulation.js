// So you want to convert a user inputted string to capital case ('Boston').  For now let's ignore two-word city names.

// To copy a section of a string, we used the .slice() method.

cityToCheck = "boSton";

var firstChar = cityToCheck.slice(0, 1);  // b
var otherChars = cityToCheck.slice(1);    // oSton
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;


//  Knowing how many characters in a string is sometimes useful...

var month = prompt("Enter a month");
var charsInMonth = month.length;
if (charsInMonth > 3) {
  monthAbbrev = month.slice(0, 3);
}

// Thus 'November' becomes 'Nov'



// How about this...

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
  if (str.slice(i, i + 2) === "  ") {
    console.log('No double spaces!');
    break;
  }
}