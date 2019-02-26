// Use the shift() method to remove from the beginning of an array.

var pets = ["dog", "cat", "bird"];

pets.shift();

console.log(pets);  // ['cat', 'bird']

//  unshift() adds to the beginning of an array

pets.unshift('ferret', 'platypus');

console.log(pets);  // ['ferret', 'platypus', 'cat', 'bird']



// splice() can be used to insert objects in the middle of an array

pets.splice(2, 1, "duck");

console.log(pets); // ['ferret', 'platypus', 'duck', 'bird']  - 'duck' was added, 'cat' was removed.

// splice() can also be used to insert without removing anything.

pets.splice(2, 0, "emu");

console.log(pets); // ['ferret', 'platypus', 'emu', 'duck', 'bird']

// splice() can also remove elements without adding any.

pets.splice(2, 1); 
console.log(pets); // ['ferret', 'platypus', 'duck', 'bird']



// The slice() method can be used to excerpt an array into a new array.  

var newPets = pets.slice(2, 4);
console.log(newPets);  // ['duck', 'bird']  

// The '2' is the first element to be copied, the '4' is the element AFTER the last element to be copied.

// You could of course assign the sliced array back to the original one.  You'd thus be reducing it.

pets = pets.slice(2, 3);
console.log(pets);  // ['duck']