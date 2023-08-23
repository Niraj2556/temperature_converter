document.getElementById("convertButton").addEventListener("click", function() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelector = document.getElementById("unitSelector");
    const selectedUnit = unitSelector.value;
    let convertedTemperature = "";

    if (isNaN(temperatureInput)) {
        convertedTemperature = "Invalid input. Please enter a valid number.";
    } else {
        if (selectedUnit === "celsius") {
            convertedTemperature = `${temperatureInput} °C is equal to ${celsiusToFahrenheit(temperatureInput)} °F and ${celsiusToKelvin(temperatureInput)} K`;
        } 
        else if (selectedUnit === "fahrenheit") {
            convertedTemperature = `${temperatureInput} °F is equal to ${fahrenheitToCelsius(temperatureInput)} °C and ${fahrenheitToKelvin(temperatureInput)} K`;
        } 
        else if (selectedUnit === "kelvin") {
            convertedTemperature = `${temperatureInput} K is equal to ${kelvinToCelsius(temperatureInput)} °C and ${kelvinToFahrenheit(temperatureInput)} °F`;
        }
    }

    document.getElementById("resultArea").textContent = convertedTemperature;
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}
