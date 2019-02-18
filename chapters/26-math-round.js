// How to round...

var numberOfStars = Math.round(scoreAvg);

// Math is capitalized.  The method rounds up at .5 as expected.  Note -1.5 is rounded to -1.

// Also note in the example above, the unrounded number stored in scoreAvg is preserved.

// To round the original number do this:

scoreAvg = Math.round(scoreAvg);

// If you want to always round one direction use these functions:

var pi = 3.1415;
var bigNum = 3.999999;

console.log(Math.ceil(pi));  // 4 - always rounds up.  -1.999 => -1

console.log(Math.floor(bigNum)); // 3 - always rounds down.  -1.0001 => -1

