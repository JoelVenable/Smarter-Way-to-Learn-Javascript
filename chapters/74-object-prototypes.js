//  So our previous way of doing things actually created multiple 
//  copies of the same function each time we executed 'new Plan()'.  

//  We can fix this by instead creating an object prototype:

function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.prototype.calcAnnual = function(percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        this.discountMonths.forEach(el => {
            if (el === thisMo) {
                bestPrice *= percentIfDisc;
            }
        });
        return bestPrice * 12;
    }
}

//  Objects can also have prototype properties (all instances share
//  the same value):

Plan.prototype.cancellable = true;

var p1 = new Plan("basic",3.99,100,1000,10,[6,7]);
var p2 = new Plan("Professional",5.99,500,5000,50,[6,7,11]);
var p3 = new Plan("Ultimate",9.99,2000,20000,500,[6,7]);

//  A prototype property can also be overridden:

p1.cancellable = false;

//  The other two plans share the same cancellable (true) property.

//  A shared prototype method can also be overridden in the same way.