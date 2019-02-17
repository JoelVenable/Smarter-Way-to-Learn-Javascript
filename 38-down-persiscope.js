// variable scope!!

// Any variable declared outside of a function is considered to have global scope.  Variables  declared within a function have local scope.  Thus:

var globalScope = 5;  // global scoped variable



function imLocal() {
  globalScope += 4;  // works because the function can access outer scope.
  var localScope = 55;


}

imLocal();
console.log(globalScope);  // 9

// console.log(localScope);  // error!


// Beware the auto global variables!!

function autoGlobal() {
  var localVar;            // explicitly defined, local variable.
  autoGlobalVariable = 5;  // automatically defined by JS as a global variable!!
  console.log(autoGlobalVariable);
}

autoGlobal();

console.log(autoGlobalVariable);  // 5 - this "shouldn't" work, but it does!

// Shadowing - Don't do this!

// So what happens if you use define the same variable globally and locally?

var shadowVar = 55;

function shadowFunc() {
  var shadowVar = 9;
  console.log(shadowVar);  // 9

  // The "global" shadowVar is not useable here because it is shadowed by the local variable.
}

shadowFunc();
console.log(shadowVar);  // 55

// You'll get confused, that's what!!  This will almost certainly set you up for mistakes.

// More fun!

var theSum = addNumbers();

function addNumbers() {
  var theSum = 2 + 2;
  return theSum;  // Different from the global theSum, but they now happen to contain the same value.
}

// Generally a bad idea to manipulate global variables from within a function.  The philosophy of a function is that it should be an entirely self-contained block of code that does one specific thing.  By manipulating a global variable you're depending on external state...

