const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");
let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const classes = event.currentTarget.classList;

    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "tomato";
    } else if (count > 0) {
      value.style.color = "greenyellow";
    } else {
      value.style.color = "white";
    }

    value.innerText = count;
  });
});
