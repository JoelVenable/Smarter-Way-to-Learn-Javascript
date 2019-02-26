var firstNames = ['BluRay', 'Upchuck', 'Lojack', 'Gizmo', 'Do-Rag'];
var lastNames = ['Zzz', 'Burp', 'Dogbone', 'Droop'];

var fullNames = [];  // empty array

for (let i in firstNames) {
  for (let j in lastNames) {
    fullNames.push(firstNames[i] + " " + lastNames[j]);
  }
}
console.log(fullNames); // 20-name array