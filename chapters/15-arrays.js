// Don't do this...

var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los ANgeles";
var city5 = "Seattle";

// Instead

var city = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

console.log("Welcome to " + city[3]);  // Welcome to Denver



// This is also perfectly fine.

var mixedArray = ["Bon", Jovi, 3];

// Heck, you can even nest arrays.

var arrayOfArrays = [[1, 2, 3], 4, hello];

