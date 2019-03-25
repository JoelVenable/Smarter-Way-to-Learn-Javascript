//  To change the value of an object, simply do this:

deal3.cost = 79.95;

deal3.name = "Super-saver";

deal3.features = ["Guarantee", "Free Ship"];

deal3.membersOnly = false;

// You can add properties to an object this way as well if they
// didn't previously exist.

deal3.market = "regional";

// You can define an object without any properties:

var deal4 = {};

// You can create a property without a value:

deal4.market = undefined;

// You can delete a property of an object:

delete deal4.market;

// You can check to see if a property exists:

var propertyExists = "market" in deal3;  // true