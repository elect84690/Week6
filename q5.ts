// Age confirmation program

function ageConfirmation(age: number){

    if (age > 0 && age < 13){
        console.log("Child");
    }

    else if (age >= 13 && age < 18){
        console.log("Teenager");
    }

    else {
        console.log("Adult");
    }
}

ageConfirmation(16);