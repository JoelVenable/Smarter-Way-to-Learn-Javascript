var gotTheProperty = "price" in plan1;

//  We're effectively asking 'Does plan1 contain the property "price"?'

//  The answer is 'true' or 'false'...

//  Note the same form is used to check for methods:

var methodExists = "calcAnnual" in plan1;

//  The property we're checking for is in quotation marks.  This 
//  is unusual behavior in Javascript (putting variables in quotes)
//  so it's worth noting.

//  If you want to list an object's properties:

var listOfProps = [];
for (let prop in plan1) {
    listOfProperties.push(prop);
}

//  The 'for...in' loop iterates all properties of the object.

//  'prop' is an arbitrary variable name that could be anything.

//  Also note that this method iterates over inherited prototype 
//  properties and methods as well.  To limit the iteration to explicitly
//  defined properties, do this: 

var listOfProperties = [];
for (let prop in plan1) {
    if (plan1.hasOwnProperty(prop)) {
        listOfProperties.push(prop);
    }
}

//  The 'hasOwnProperty()' method tests to see if the property is 
//  owned by the object directly instead of through inheritance from a prototype.

