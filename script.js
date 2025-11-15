// Find the important HTML elements and give them nicknames
const calculateButton = document.getElementById("calculateBtn");
const wattsInput = document.getElementById("wattsInput");
const resultText = document.getElementById("resultText");

// This is the "magic formula" for the Kardashev Scale
function calculateKardashev(watts) {
  // K = (log10(W) - 6) / 10
  return (Math.log10(watts) - 6) / 10;
}

// Add a "listener" that waits for the button to be clicked
calculateButton.addEventListener("click", () => {
  const watts = parseFloat(wattsInput.value);

  // Check if the user entered a valid number
  if (isNaN(watts) || watts <= 0) {
    resultText.innerText = "Please enter a valid number of watts.";
    resultText.style.color = "#dc3545"; // Make error text red
    return;
  }

  // If the number is valid, do the calculation
  const level = calculateKardashev(watts);

  // Display the result on the page
  resultText.innerText = `Result: Type ${level.toFixed(2)} Civilization`;
  resultText.style.color = "#28a745"; // Make result text green
});
