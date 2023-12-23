// Based on the number of days in a year it checks if the year is a leap year or not

function leapYearCheck(year: number){

    if (((year % 4 == 0) && (year % 100 != 0)) || ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0))) {
        console.log("It is a leap year.");
    }    
    
    else {
        console.log("It is not a leap year.");
    }
}

leapYearCheck(2016);