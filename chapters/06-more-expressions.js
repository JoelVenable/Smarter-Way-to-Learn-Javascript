// Specialized expressions...

num = 1;

num++;  // Shorthand for...

num = num + 1;


// Decrementing...

num--;

// A few gotchas...

num = 1;

var newNum = num++;  // 
console.log(newNum); // 1 - newNum is assigned to 1 before the increment happens.
console.log(num);  // 2

var num3 = ++num; // In this case num increments before the assignment.

console.log(num3);  // 3
console.log(num);   // 3
// Same thing with decrementing...

var num4 = num--;  

console.log(num4);  // 3
console.log(num);  // 2

var num5 = --num;
console.log(num5); // 1
console.log(num);  // 1


