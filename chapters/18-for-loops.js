//  99 bottles of beer on the wall...

/*
for (let i = 99; i > 0; i--) {
  console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer!');
  var minus1 = i - 1;
  console.log('Take one down, pass it around, ' + minus1 + ' bottles of beer on the wall.');
}  */

var cleanestCities = ["Cheyenne", "Santa Fe", "Tuscson", "Great Falls", "Honolulu"];

//  Going through an array, the slow way...

function congrats() {
  console.log("Congratulations, you have one of the cleanest cities!");
}

if (cityToCheck === cleanestCities[0]) congrats();
else if (cityToCheck === cleanestCities[1]) congrats();
else if (cityToCheck === cleanestCities[2]) congrats();
else if (cityToCheck === cleanestCities[3]) congrats();
else if (cityToCheck === cleanestCities[4]) congrats();
else console.log('You suck.');

// For loop to the rescue.
// Note: The 'let' keyword scopes the new variable exclusively to the 'for' loop.


for (let i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) congrats();
}

// Or...

for (let i = 0; i < cleanestCities.length; i++) {
  if (cityToCheck === cleanestCities[i]) congrats();
}

// Also...
for (let i in cleanestCities) {
  if (cityToCheck === cleanestCities[i]) congrats();
}
