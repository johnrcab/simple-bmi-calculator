function roundToDecimalPlaces(number, decimalPlaces) {
	var multiplier = Math.pow(10, decimalPlaces);
	return Math.ceil(number * multiplier) / multiplier;
}

function calculateBMI() {
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);
	var result = document.getElementById("result");
	var calculate = weight / height ** 2;
	var roundedResult = roundToDecimalPlaces(calculate, 1);
	var category = document.getElementById("category");
	
	if (roundedResult < 18.5) {
		result.textContent = roundedResult;
		category.innerHTML = "Underweight";
	}
	else if (roundedResult >= 18.5 && roundedResult <= 24.9) {
		result.textContent = roundedResult;
		category.innerHTML = "Normal";
	}
	else if (roundedResult >= 25 && roundedResult <= 29.9) {
		result.textContent = roundedResult;
		category.innerHTML = "Overweight";
	}
	else if (roundedResult >= 30.0 && roundedResult <= 34.9) {
		result.textContent = roundedResult;
		category.innerHTML = "Obese";
	}
	else if (roundedResult >= 35.0 && roundedResult <= 39.9) {
		result.textContent = roundedResult;
		category.innerHTML = "Obese (Class 2)";
	}
	else if (roundedResult > 40.0) {
		result.textContent = roundedResult;
		category.innerHTML = "Obese (Class 3)";
	}
	else {
		result.innerHTML = "Error! Please Enter a valid value";
		category.innerHTML = "Error! Please Enter a valid value";
	}
}