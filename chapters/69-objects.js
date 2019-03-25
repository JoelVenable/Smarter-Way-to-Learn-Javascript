var plan1Name = "Basic";
var plan1Price = 3.99;
var plan1Space = 100
var plan1Data = 1000;
var plan1Pages = 10;
var plan2Name = "Professional";
var plan2Price = 5.99;
var plan2Space = 500;
var plan2Data = 5000;
var plan2Pages = 50;
var plan3Name = "Ultimate";
// eew...


var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};

//  Define a new object element like this:

plan1.discountMonths = [ 6, 7, 11];

var mo = plan1.discountMonths[2];