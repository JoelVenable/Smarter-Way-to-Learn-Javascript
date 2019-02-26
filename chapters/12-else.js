// If conditions execute code if the evaulation == true, else code executes otherwise.

// What if you want code to execute like this...

var q32 = prompt("Where does the Pope live?");
if (q32 === "Vatican") {
  console.log('Correct!');
} 
if (q32 !== "Vatican") {
  console.log('WRONG!!!!!!!!!!!');
}


// So do this....

if (q32 === "Vatican") {
  console.log('Correct!');
}
else {
  score--;
  userIQ = "deficient";
  console.log('WRONG!!!!!!!!!!!');
}


// How about...

if (q32 === "Vatican") {
  console.log('Correct!');
} else if (q32 === "Rome") {
  console.log('Close!');
} 
else {
  console.log('WRONG!!!!!!!!!!!');
}