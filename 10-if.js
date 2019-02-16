
function Correct() {  // Don't repeat yourself!
  console.log('Correct!');
};


var answer = prompt("Where does the Pope live?");

if (answer === "Vatican") {
  Correct();
}



// The above code is case sensitive.

// This also works:

var correctAnswer = "Vatican";

if (answer === correctAnswer) {
  Correct();
}


// If statements can have multiple lines of code, just make sure they're all inside the curly brackets.

if (answer === correctAnswer) {
  Correct();
  userIQ = "genius";
  score++;
}

//  Also legal code:

if (answer === correctAnswer) Correct();

// or 
if (answer === correctAnswer) { Correct(); }

