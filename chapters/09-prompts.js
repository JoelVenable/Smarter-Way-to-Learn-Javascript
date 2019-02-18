//  Since I'm using node.js I'll be deviating from the 'prompt' idea using the node.js readline module.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Does this work?", (answer) => {  // Mmm, fat arrows...
  console.log("You typed... " + answer);
  rl.close();
});

//  Quite a bit different from the prompt functionality.  

var spec = prompt("Your species?", "human");

//  Same as with string concatenation, this also works...

var question = "Your Species?";
var defAnswer = "human";

var spec = prompt(question, defAnswer);


var numOfCats = prompt("How many cats?");
var tooManyCats = numOfCats + 1; 

// Note that this doesn't work since numOfCats is storing a string.  We'll have to convert it first...

// Just like with alert(), window.prompt() also works.

