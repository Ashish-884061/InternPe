const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function handleBackspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function handleKeyboardInput(key) {
  if (key.match(/[0-9+\-*/.%]/) || key === "Enter") {
    if (key === "Enter") {
      calculateResult();
    } else {
      appendToDisplay(key);
    }
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
}

document.addEventListener("keydown", event => {
  const key = event.key;
  handleKeyboardInput(key);
});

// Add event listeners to buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "C") {
      clearDisplay();
    } else if (buttonValue === "=") {
      calculateResult();
    }
  });
});
