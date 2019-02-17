// Capitalization issues with user entry.  A human knows 'cheyenne' is the same thing as 'Cheyenne' but JS does not.

//  One way is to do this...

var cleanestCities = ["Cheyenne", "cheyenne"]; // ...

// But that is less than optimal. Plus if the user enters 'santa Fe' or 'sAnta fE' we still have a problem.

// Instead let's do this...

var cityToCheck = prompt('Enter your city...');

cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ['cheyenne', 'santa fe', 'tucson', 'great falls', 'honolulu'];

for (let i in cleanestCities) {
  if (cityToCheck === cleanestCities[i]) console.log('You live in squeakily-cleanville!');
}


// You could also use .toUpperCase() but the lower case conversion is more common.


