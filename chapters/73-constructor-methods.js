//  Adding onto our constructor function, let's add the discount
//  months calculations:

function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function(percentIfDisc) {
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

//  note that the constructor function does not CALL the method, 
//  it merely creates it.

var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6,7]);
var p2 = new Plan("Professional",5.99,500,5000,50, [6,7,11]);
var p3 = new Plan("Ultimate",2000,20000,500, [6,7]);

//  Now we call the function and pass a value:

var annualPrice = p2.calcAnnual(.85);

//  Difference between a function in a constructor and a one-off
//  object is only in how they are defined:

//  Object:  'calcAnnual: function(arg1) { ... },'
//  Constructor:  'this.calcAnnual = function(arg1) { ... };'

//  Also note that in an object there's a comma after the curly
//  braces if there is another property.  In a constructor, the
//  declaration is ended with a ;.



