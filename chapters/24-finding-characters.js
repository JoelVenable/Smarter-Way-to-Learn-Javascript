// User enters first name.  Extract the first character.  Here's one way that we already covered:

var firstChar = firstName.slice(0, 1);

// Alternately:

var firstChar = firstName.charAt(0);

// Finds the character at index 0.

// To find the last character:

var lastChar = name.charAt(name.length - 1);

// So let's find a bang.

for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === "!") {
    console.log('We found a bang!');
    break;
  }
}

// The indexOf() method can only find a character, it cannot manipulate the string directly.

