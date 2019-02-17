var rightNow = new Date();

// We just created a date object, created from the user's computer.  It's only as accurate as the clock.

// The Date object resembles a string but it isn't one; string methods will not work.

var dateString = rightNow.toString();  // converts the date object to a string, now you can use slice() or whatever.


// Most often you'll just want some information from the Date object.  It has its own methods of extracting info.

var theDay = rightNow.getDay();

console.log(theDay);  // 6  - Today is Saturday as I type this.  So if I wanted "Sat" I'd need to code a bit...

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var todayName = dayNames[theDay];  

console.log(todayName);  // Sat

/*  So we just....

1.  Created an array with the days of the week.
2.  Used theDay as an index to get the day of the week from the array.

*/

