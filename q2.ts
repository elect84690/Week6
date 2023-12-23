// Calculate the relation between two numbers as per first number is percentage of second number

function percentageCalculator(number1: number, number2: number){
    console.log(`${number1} is ${(number1 / number2) * 100}% of ${number2}.`);
}

percentageCalculator(2000, 200);