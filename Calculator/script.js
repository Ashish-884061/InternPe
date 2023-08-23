const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

document.addEventListener("keydown", event => {
  if (event.key.match(/[0-9+\-*/.%]/)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});
