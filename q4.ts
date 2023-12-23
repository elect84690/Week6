// Calculate discount and disconted price of an item

function discountCalculator(price:number){

    if (price > 100){
        console.log(`Discount over $${price} is 10% which is $${(price / 10)}. Please pay $${price - (price / 10)}. Thank you!`);
    }

    else {
        console.log(`Discount over $${price} is 5% which is $${(price / 20)}. Please pay $${price - (price / 20)}. Thank you!`);
    }
}

discountCalculator(150);