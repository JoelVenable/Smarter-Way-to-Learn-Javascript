if ((x === y || a === b) && c === d) {
  g = h;
} 
else {
  e = f;
}

// You could also do this.  In this case it's actually longer, but it's easier to understand what's going on.

if (c === d) {
  if (x === y) {
    g = h;
  }
  else if (a === b) {
    g = h;
  }
}
else {
  e = f;
}