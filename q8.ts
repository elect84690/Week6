// Tells the name of the day of the week based on number of day from 1-to-7 (i.e. Monday-to-Sunday)

function dayOfWeek(dayNumber: number){
    if (dayNumber >= 1 && dayNumber <= 7){
        if (dayNumber == 1){
            console.log("Monday");
        }
        else if (dayNumber == 2){
            console.log("Tuesday");
        }
        else if (dayNumber == 3){
            console.log("Wednesday");
        }
        else if (dayNumber == 4){
            console.log("Thursday");
        }
        else if (dayNumber == 5){
            console.log("Friday");
        }
        else if (dayNumber == 6){
            console.log("Saturday");
        }
        else{
            console.log("Sunday");
        }
    }

    else{
        console.log("Please select a number betweeen 1-7 only, thank you!");
    }
}

dayOfWeek(6);