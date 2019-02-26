// Standard algebraic order of operations applies to mathematical equations in JS.

// It's often helpful (improves readability) to remove doubt and use parentheses.

var totalCost = 1 + 3 * 4;  

console.log(totalCost);  // 13

// evaluates the same as...

var newCost = 1 + (3 * 4);

console.log(newCost);  // 13

// The other way...

var badAtMath = (1 + 3) * 4;  

console.log(badAtMath);  // 16


//  Another example...

var result = 2 * 4 * 4 + 2;

console.log(result);  // 34

var reallyBadAtMath = 2 * 4 * (4 + 2);

console.log(reallyBadAtMath); // 48