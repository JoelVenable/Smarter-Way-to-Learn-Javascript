// How to pass data into a function?  After all, they have closure on their variables...

function greetUser() {
  console.log('Hello there.');
}

// What if I had your name stored elsewhere and wanted to use it?

function greetName(name) {  // Now you're passing data into the function.
  console.log(`Hello ${name}.`);
}

// A variable inside the parens opening a function is called a parameter.  The name should have semantic meaning as it is often visible by code editors when calling the function.

var userName = "Joel";
greetName(userName);  // Hello Joel.

// Or how about...

function greetMsg(message) {
  console.log(message);
}

var greeting = "Hello there.";
greetMsg(greeting);  // Hello there.

// This function is basically just an alias for console.log() but hey...

// Also note that the naming convention inside the function has nothing to do with the naming of the parameter that is passed to it.  Some people are actually confused by that practice, so I prefer not to do it.


// You can also pass values directly into a function.

greetMsg("Well aren't you cute.");  // Well aren't you cute.

// How about a $ function?

function dollarSigns(num) {
  num = num.toFixed(2).split("");
  var point = num.indexOf(".");
  // TODO: correct the rounding issues associated with the toFixed() method.
  while (point > 3) {
    num.splice(point - 3, 0, ",");
    point -= 3;
  }
  return '$' + num.join("");
}

var bigNum = 999999999;
console.log(dollarSigns(bigNum));


//  Another messaging function...

function showMessage(m, string, num) {
  console.log(m + string + num);
}

var month = "March";

showMessage(month, "'s winner number is ", 23);  // March's winner number is 23