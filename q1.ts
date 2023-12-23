// Temperature scale converter

function celciusToFahrenheit(celcius: number){
    console.log(((celcius * 9) / 5) + 32);
}

celciusToFahrenheit(37);

function fahrenheitToCelcius(fahrenheit: number){
    console.log(((fahrenheit - 32) / 9) * 5);
}

fahrenheitToCelcius(98.6);