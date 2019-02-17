//  Functions can also output data, not just receive it.
var merchTot;
// First, some code...
var orderTot;
if (merchTot >= 100) {
  orderTot = merchTot;
}
else if (merchTot < 50.01) {
  orderTot = merchTot + 5;
}
else {
  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
}

// Calculates shipping: flat $5 for orders below $50, $5 + 3% from 50-99, free at 100.

// So let's wrap it in a function.

function calcShip(merchTotal) { 
  if (merchTotal >= 100) return merchTotal;
  else if (merchTotal < 50.01) return merchTotal + 5;
  else return (merchTotal + 5 + (.03 * (merchTotal - 50))).toFixed(2);
}

//  How's that for refactoring!!

// Note that the outside code will need something to catch the returned value.  How about a variable?

var totalToCharge = calcShip(79.99);  // This code runs the function and the totalToCharge variable stores the result.

// You can also pass the returned value into another function, like console.log:

console.log(`Your total is ${calcShip(79.99)}`);

//  How about a simple tax calculator?

function calcTax(subTotal) { return (subTotal * 0.075).toFixed(2); }


function calc(subTotal, tax) { return (subTotal + tax); }

// Then you can pass the result of a function into another function.

var total = calc(79.99, calcTax(79.99));

console.log(calcTax(79.99));
// You can also call a function from another function.  

function calcTotal(subTotal) {
  return (parseFloat(calcTax(subTotal)) + parseFloat(calcShip(subTotal)));
}

console.log(calcTotal(79.99));

//  Note that while a function can accept many arguments, it can only return a single value (though it can return an ARRAY!!).