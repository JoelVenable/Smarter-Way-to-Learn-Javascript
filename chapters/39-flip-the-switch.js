// Let's learn switch statements...

// First, the long way:
var dayOfWk = "Sat";

if (dayOfWk === "Sat" || dayOfWk === "Sun") {
  console.log("Whoopee!");
}
else if (dayOfWk === "Fri") {
  console.log("TGIF!");
}
else {
  console.log("Shoot me now.");
}

// Let's use a switch instead.

switch (dayOfWk) {
  case "Sat":
    console.log("Whoopee!");
    break;
  case "Sun":
    console.log("Whoopee!");
    break;
  case "Fri":
    console.log('TGIF!');
    break;
  default: 
    console.log("Shoot me now!");
}

// Can be further shortened:

switch (dayOfWk) {
  case "Sat":
  case "Sun":
    console.log("Whoopee!");
    break;
  case "Fri":
    console.log('TGIF!');
    break;
  default:
    console.log("Shoot me now!");
}