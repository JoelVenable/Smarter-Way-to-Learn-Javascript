// Before we covered the slice() approach:

for (let i in text) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
  }
}

// Then we improved on that with the indexOf() approach:

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}


// Javascript has a better way:

var newText = text.replace("world War II", "the Second World War");

// 'text' is parsed and the FIRST instance of the first string found are replaced with the second.

// If the result is assigned to a new variable, the original string is preserved.  You could also replace the original as such:

text = text.replace("World War II", "the Second World War");

// To replace all, use a global replace:

var newText = text.replace(/World War II/g, "the Second World War");

// Use / instead of " for the string to be replaced, and close with a 'g'

