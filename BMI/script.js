// script.js
document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values!");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    const resultDiv = document.getElementById("result");
    const bmiValue = document.getElementById("bmiValue");
    const bmiCategory = document.getElementById("bmiCategory");

    bmiValue.textContent = bmi;
    resultDiv.style.display = "block";

    if (bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
        bmiCategory.style.color = "#f39c12";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.textContent = "Normal weight";
        bmiCategory.style.color = "#2ecc71";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.textContent = "Overweight";
        bmiCategory.style.color = "#e67e22";
    } else {
        bmiCategory.textContent = "Obesity";
        bmiCategory.style.color = "#e74c3c";
    }
});
