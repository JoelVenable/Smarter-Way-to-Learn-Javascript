/*  We're going to write a function that calculates the annual charge
based on a chart that shows monthly prices.

If the user signs up for the Basic Plan in July or August he gets
20% off.  If he signs up for the Professional Plan in July, August
or December, he gets 20% off.  If he signs up for the Ultimate Plan
in July or August, he gets 20% off.

We'll begin by creating 3 objects:
*/

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6,7]
};

//  This function checks discountMonths against the current month
//  and calculates the discount:

function calcAnnual() {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    plan1.discountMonths.forEach(el => {
        if (el === thisMo) {
            bestPrice *= .8;
        }
    })
    return bestPrice * 12;
}

var annualPrice = calcAnnual();

//  Let's make the above function more flexible:

function calcAnnual2(percentIfDiscount) {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    plan1.discountMonths.forEach(el => {
        if (el === thisMo) {
            bestPrice *= percentIfDiscount;
        }
    })
    return bestPrice * 12;
}

var newPrice = calcAnnual2(.85);

//  Let's attach the function inside the plan1 object to make it
//  a method!

var plan2 = {
    name: "Professional",
    price: 5.99,
    space: 500,
    transfer: 5000,
    pages: 10,
    discountMonths: [6,7,12],
    calcAnnual: function(percentIfDiscount) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        plan1.discountMonths.forEach(el => {
            if (el === thisMo) {
                bestPrice *= percentIfDiscount;
            }
        })
        return bestPrice * 12;
    }
};

// So we'd call the method like this:

var newPrice2 = plan2.calcAnnual(.85);

// Instead of referring to the object directly, we'll start using 'this':

var plan3 = {
    name: "Ultimate",
    price: 9.99,
    space: 2000,
    transfer: 20000,
    pages: 500,
    discountMonths: [6,7],
    calcAnnual: function(percentIfDiscount) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        this.discountMonths.forEach(el => {
            if (el === thisMo) {
                bestPrice *= percentIfDiscount;
            }
        })
        return bestPrice * 12;
    }
};