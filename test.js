var pets = ["dog", "cat", "bird"];
console.log(pets.shift()); // "dog"

pets.unshift("fish", "ferret");

console.log(pets);  // ["fish", "ferret", "cat", "bird"]