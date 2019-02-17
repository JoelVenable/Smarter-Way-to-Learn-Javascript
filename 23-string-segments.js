// The New Yorker magazine does not allow 'World War II' : should be 'the Second World War'.  So let's find and replace.


// So here's one way...

for (var i = 0; i < textVar.length; i++) {
  if (textVar.slice(i, i + 12) === "World War II") {
    textVar = textVar.slice(0, i) + "the Second World War" + textVar.slice(i + 12);
  }
}

// Javascript has a more efficient way to do this...

var firstChar = textVar.indexOf("World War II");

// If the segment exists, the index position of the first character of the FIRST INSTANCE of the given string.

// If the segment doesn't exist, the -1 value is assigned to the firstChar variable.

// Continuing...

if (firstChar !== -1) {  // If not -1 it means that the indexOf() method found the target phrase.
  textVar = textVar.slice(0, firstChar) + "the Second World War" + textVar.slice(firstChar + 12);
}

// If you need to find more than one instance of the example above, you could use a loop.  Change the first instance then look for another.

// To find the last instance...

var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");

