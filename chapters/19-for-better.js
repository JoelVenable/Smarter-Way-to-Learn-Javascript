// With the previous example, we no longer provided a status message if the city wasn't found in the cleanestCities array.

// We can fix that issue by using a flag variable.

var matchFound = false;
for (let i in cleanestCities) {
  if (cityToCheck === cleanestCities[i]) {
    console.log('Cleanest city!');
    matchFound = true;
  }
}

if (!matchFound) {
  console.log('You suck!');
}

//  We can also use the 'break' keyword to exit out of the loop once a match is found.  In this case we no longer need to iterate through the rest of the array.

var matchFound = false;
for (let i in cleanestCities) {
  if (cityToCheck === cleanestCities[i]) {
    console.log('Cleanest city!');
    matchFound = true;
    break; // exits the loop once match found.
  }
}

if (!matchFound) {
  console.log('You suck!');
}

// This chapter also talks about using array.length which I already did in the last chapter...