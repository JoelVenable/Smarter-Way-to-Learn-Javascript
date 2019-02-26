// So how do we add and remove elements from an array?

var city = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];


console.log(city[0]);  // Atlanta

city[0] = "San Antonio";  

console.log(city[0]);  // San Antonio

// It's perfectly legal to add discontinuous elements to an array.

city[20] = "Bakersfield";

console.log(city[19]);  // undefined

// Using the keyword pop() removes the last element from an array (note the function also returns the popped element).

console.log(city.pop()); // Bakersfield

console.log(city);  // [ 'San Antonio', 'Baltimore', ..., <14 empty items>] (note no Bakersfield)

var pets = ['dog', 'cat'];

pets.push("ferret");

console.log(pets);  // ['dog', 'cat', 'ferret']

