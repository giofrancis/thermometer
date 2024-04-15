function updateThermometer() {
  let value = parseFloat(document.getElementById("inputValue").value);
  let targetValue = parseFloat(document.getElementById("targetInput").value); // Get the target value
  
  if (!isNaN(value) && !isNaN(targetValue)) {
    let mercury = document.getElementById("mercury");
    let maxHeight = document.querySelector('.thermometer').offsetHeight;
    let newHeight = (value / targetValue) * maxHeight;
    
    // Get the current height of the mercury
    let currentHeight = parseFloat(mercury.style.height) || 0;
    
    // Calculate the difference between the current and new heights
    let heightDiff = newHeight - currentHeight;
    
    // Calculate the duration based on the height difference
    let duration = Math.abs(heightDiff) / maxHeight * 5000; // 5000 ms = 5 seconds
    
    mercury.style.transition = `height ${duration}ms linear`;
    mercury.style.height = newHeight + "px";
    
    // Update current value display
    document.getElementById("currentValue").innerText = value;
  } else {
    alert("Please enter valid numbers for both current and target values.");
  }
}

