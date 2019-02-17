// So what happens if you don't break??
var dayOfWk = "Sat";
switch (dayOfWk) {
  case "Sat":
  case "Sun":
    console.log("Whoopee!");
  case "Fri":
    console.log('TGIF!');
  default:  
    console.log("Shoot me now!");
}

// All three code blocks execute.  This can be useful behavior as long as that is what you intend.

// 'default' block executes if none of the other conditions are met.  Just like an 'else' in an 'if' statement.

// So if 'dayOfWk' above was ANYTHING except "Fri", "Sat", or "Sun", the default block would run.

// If there is no 'default' statement, it's wise to add a 'break' after the last case anyway so you won't forget to add it if you add another case later.

