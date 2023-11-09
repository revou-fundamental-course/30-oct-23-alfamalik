// Dalam file JavaScript (script.js)
document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);

    // Konversi tinggi badan dari sentimeter ke meter
    const heightInM = heightInCm / 100;

    const bmiValue = weight / (heightInM * heightInM);
    const bmiValueFormatted = bmiValue.toFixed(2);

    let bmiCategory = "";
    if (bmiValue < 18.5) {
        bmiCategory = "Kekurangan Berat Badan";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiCategory = "Normal (Ideal)";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiCategory = "Kelebihan Berat Badan";
    } else {
        bmiCategory = "Obesitas";
    }
    document.getElementById("bmiCategory1").textContent = `${bmiCategory}`;
    document.getElementById("bmiValue").textContent = bmiValueFormatted;
    document.getElementById("bmiCategory").textContent = `Anda memiliki BMI : ${bmiCategory}`;
    document.getElementById("bmiResult").style.display = "block";
});
// Menambahkan logika reset
document.getElementById("resetButton").addEventListener("click", function (e) {
    // Menghapus hasil BMI dan mereset form
    document.getElementById("bmiResult").style.display = "none";
    document.getElementById("bmiValue").textContent = "";
    document.getElementById("bmiCategory").textContent = "";
    document.getElementById("bmiForm").reset();
});