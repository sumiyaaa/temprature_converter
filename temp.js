function convertTemperature() {
	let temperature = document.getElementById("temperature").value;
	let scale = document.getElementById("scale").value;
	let result = document.getElementById("result");

	if (isNaN(temperature)) {
		result.innerHTML = "Please enter a valid number.";
		return;
	}

	let convertedTemperature = 0;

	if (scale === "celsius") {
		convertedTemperature = (temperature * 9/5) + 32;
		result.innerHTML = temperature + "°C is equal to " + convertedTemperature + "°F";
	} else if (scale === "fahrenheit") {
		convertedTemperature = (temperature - 32) * 5/9;
		result.innerHTML = temperature + "°F is equal to " + convertedTemperature + "°C";
	} else if (scale === "kelvin") {
		convertedTemperature = temperature + 273.15;
		result.innerHTML = temperature + "K is equal to " + convertedTemperature + "°C";
	} else {
		result.innerHTML = "Please select a valid scale.";
	}
}