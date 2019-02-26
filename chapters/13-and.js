// Multiple condition tests...

if (weight > 300 && time < 6) {
  console.log('Come to our tryout!');
}
else {
  console.log('Come to our cookout!');
}

//  Even MOAR!

if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  console.log('I\'m a sexist employer.');
}
else {
  console.log('You\'re not welcome here.');
}


// Either... OR.

if (SAT > avg || GPA > 2.5 || sport === "football") {
  console.log('Welcome to the University of Alabama!');
}
else {
  console.log('I"m sorry, we don\'t serve your kind here.'); 
}


// Using '&&' with '||' can get confusing...

if (age > 65 || age < 21 && res === "U.S.") { }; 

// This could be read two ways...  

if ((age > 65 || age < 21) && res === "U.S.") { };


if (age > 65 || (age < 21 && res === "U.S.")) { };  // Without the parens would be the same as this one!
