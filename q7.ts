// Check for multiples of 3 and 5

function multipleOfThreeAndFive(givenNumber: number){

    if ((givenNumber % 3) == 0 && (givenNumber % 5) != 0){
        console.log('This number is a multiple of 3.');
    }

    else if ((givenNumber % 3) != 0 && (givenNumber % 5) == 0){
        console.log('This number is a multiple of 5.');
    }

    else if ((givenNumber % 3) == 0 && (givenNumber % 5) == 0){
        console.log('This number is a multiple of both 3 and 5.');
    }

    else {
        console.log('This number is neither a multiple of 3 nor 5.');
    }
}

multipleOfThreeAndFive(15);