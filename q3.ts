// Calculate the number of weeks and remaing days before next week only from given number of days

let weeks: number = 0;

function weekCalculator(days: number){

    for (let i = 1; i <= days; i++){
        if (i % 7 == 0){
            weeks += 1;
        }
    }

    console.log(`${weeks} Weeks and ${days % 7} Days.`);
}

weekCalculator(21);