// Say each unit consumed costs one unit of currency.

function bill(unitsConsumed: number){

    if (unitsConsumed < 100){
        console.log(`Consumer price is ${unitsConsumed} and it does not bear any tax. Your total is ${unitsConsumed}.`);
    }

    else if (unitsConsumed >= 100 && unitsConsumed < 200){
        console.log(`Consumer price is ${unitsConsumed} and it bears 10% tax which is ${(unitsConsumed * 10) / 100}. Your total is ${unitsConsumed + ((unitsConsumed * 10) / 100)}.`);
    }

    else if (unitsConsumed >= 200 && unitsConsumed < 500){
        console.log(`Consumer price is ${unitsConsumed} and it bears 15% tax which is ${(unitsConsumed * 15 )/ 100}. Your total is ${unitsConsumed + ((unitsConsumed * 15) / 100)}.`);
    }

    else if (unitsConsumed >= 500){
        console.log(`Consumer price is ${unitsConsumed} and it bears 25% tax which is ${(unitsConsumed * 25 )/ 100}. Your total is ${unitsConsumed + ((unitsConsumed * 25) / 100)}.`);
    }
    else{
        console.log("Please try a non negative number.");
    }
}

bill(1500);