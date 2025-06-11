function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperatureInput").value);
  const type = document.getElementById("conversionType").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.textContent = "❗ Please enter a valid number.";
    return;
  }

  let result;
  if (type === "CtoF") {
    result = (temp * 9 / 5) + 32;
    resultDiv.textContent = `Result: ${result.toFixed(2)}°F`;
  } else {
    result = (temp - 32) * 5 / 9;
    resultDiv.textContent = `Result: ${result.toFixed(2)}°C`;
  }
}
