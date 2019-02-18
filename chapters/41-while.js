// 'for' loops revisited

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// So there's three components:

//  'let i = 0' establishes the counter.
//  'i <= 3'  is the condition that the loop must satisfy to keep running
//  'i++' is the iterator


// A 'while' loop does the same thing, with a different organization.  

var i = 0;  // establishes counter
while (i <= 3) {  // condition
  console.log(i);
  i++;  // iterator
}

// The main difference here is the declared variable sticks around after the loop finishes running.  The 'let' declaration doesn't leave a trail behind.  That could still be fixed as such:

{
  let i = 0;
  while (i <= 3) {
    console.log(i);
    i++;
  }
}

// 'i' is now scoped to the block containing the 'while' statement.



