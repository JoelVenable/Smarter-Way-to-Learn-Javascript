var today = new Date();

// Let's create a countdown timer...

var doomsDay = new Date("June 30, 2035");

var msToday = today.getTime();
var msDoomsDay = doomsDay.getTime();

//  Got today's time and doomsDay's time.  Now we just get the difference.

var msDiff = msDoomsDay - msToday;

// Some math gets us back to days...

var dDiff = msDiff / (1000 * 60 * 60 * 24);

// Then we get the floor for number of days.  We could use the modulus operator to get hours, minutes, etc. if desired.

dDiff = Math.floor(dDiff);

console.log(dDiff);  // 5976  (as of today)

// How about getting years?

var yDiff = Math.floor(dDiff / 365);

dDiff = dDiff % 365;

console.log(`We have ${yDiff} years and ${dDiff} days until doomsday.`);  // Remember to use the ` (backtick) to concatenate strings properly...

