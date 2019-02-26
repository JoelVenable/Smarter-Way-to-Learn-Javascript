// To simulate dice rolls, use the pseudo-random number generator (don't use this for cryptography!!)

var rand = Math.random();

//  The function displays a 16-decimal number between 0.0000... and 0.99999...  We could make trillions of possible numbers from the result, but we only want a six-sided dice throw:

var diceRoll = Math.floor((rand * 6) + 1);

// With this function it's extremely important to ensure that your intended results each have equal probability!

