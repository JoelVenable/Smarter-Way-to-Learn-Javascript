// Individual elements of a date object can also be manipulated...




var d = new Date();


console.log(d); //  2019-02-17T16:00:54.557Z  (as of this writing)

d.setFullYear(2006);

console.log(d); // 2006-02-17T16:00:54.557Z

d.setMonth(6); // 2006-06-17T16:00:54.557Z

d.setDate(6);  // 2006-06-06T16:00:54.557Z  ... etc

d.setHours(12);

d.setMinutes(11);

d.setSeconds(6);

d.setMilliseconds(6);

// Each method changes the respective element of the date object without changing anything else.

// So let's assume the output of console.log(d) 