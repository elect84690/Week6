// Based on temperature value in degrees suggest a positive reaction 

function temperatureBasedSuggestion(temperatureInDegrees = 39){

    if (temperatureInDegrees <= 10) {
        console.log("It's a bit cold today, I suggest putting on some warm cothes!");
    } 

    else if (temperatureInDegrees > 10 && temperatureInDegrees <= 35){
        console.log("It feels great, right? You can can do anything today!");
    }

    else {
        console.log("It's hot out there, I suggest drinking plenty of water today!");
    }
}

temperatureBasedSuggestion(35);