//  So recall earlier we created a hosting plan like this:

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};

//  Then we'd have to do the same thing with the other plans.

//  Instead of turning the crank, let's make a factory:

function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}


//  Note the capitalized name, which defines it as a constructor
//  This is a stylistic definition, not a syntax requirement.

//  Then we go on to create our plans like this:

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var plan2 = new Plan("Professional", 5.99,500,5000,50);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);
