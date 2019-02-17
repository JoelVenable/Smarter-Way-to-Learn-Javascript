// Difference between a 'while' and a 'do...while' is that in a 'do' loop the first iteration of code ALWAYS runs, before the condition is checked.

{
  let i = 0;
  while (i <= 3) {
    console.log(i);
    i++;
  }
}

// do accomplishes almost the same thing...

{
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 3);
}

// It's possible to code a 'while' loop that never executes.  

{
  let i = 0;
  while (i < 0) {
    console.log("This code will never execute");
    i++;
  }
}

// Whereas it's NOT possible with a do loop.

{
  let i = 0;
  do {
    console.log("You'll see me at least ONCE!!!");
    i++;
  } while (i < 0);
}
