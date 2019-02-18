// So let's write a reusable block of code.

var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
console.log(`time:  ${theHr}:${theMin}`); // time: 10:5  - whoops, it's actually 10:05!  Let's fix that...

if (theMin.toString().length === 1) {
  theMin = "0" + theMin;
}

console.log(`time:  ${theHr}:${theMin}`);  // That's better.

// So now let's wrap it in a function.

function tellTime() {
  var now = new Date();
  var theMin = now.getMinutes();
  if (theMin.toString().length === 1) theMin = "0" + theMin;
  console.log(`Current time:  ${now.getHours()}:${theMin}`);

}

tellTime();

