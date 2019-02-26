console.log('Thanks for your input!');

// Is the same as...

var message = "Thanks for your input!";
console.log(message);

// What if you want to personalize?

var userName = "Joel";

console.log('Thanks ' + userName + '!');  // Thanks Joel!

// Or also...

var thank = "Thanks ";  
var bang = "!";

console.log(thank + userName + bang);  // Thanks Joel!

// Can also make a new variable to concatenate...

var textJoin = thank + userName + bang;

console.log(textJoin); // Thanks Joel!

// Numbers stored as strings...

console.log('2' + '2'); // 22

// Mixing strings and numbers:

console.log('2 plus 2 = ' + 2 + 2); // 2 plus 2 = 22  

// The numbers are coerced to strings and concatenated.



