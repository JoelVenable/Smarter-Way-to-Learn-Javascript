//  Equality operators...

if (fullName === "Mark" + " " + "Myers") { };
if (fullName === firstName + " " + "Myers") { };
if (totalCost === 81.50 + 135) { };


//  Note the === is for strict equality.  Type coercion is not allowed.  So (135 !== "135"), but (135 == "135").

//  !== is 'not equal to'

if (yourTicketNumber !== 487230) { 
  console.log("Better luck next time...");
};

// String comparisons are case sensitive...

if ("Rose" === "rose") { };  // false

//  > (greater than)
//  < (less than)
//  >= (greater than or equal to)
//  <= (less than or equal to)