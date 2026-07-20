const btns = document.querySelectorAll(".btn");

btns.forEach((e) => {
  if (["+", "-", "*", "/", "="].includes(e.innerHTML)) {
    e.style.background = "var(--Light-First-color)";
  }
  if (["C"].includes(e.innerHTML)) {
    e.style.background = "var(--Red-color)";
  }
  if (["="].includes(e.innerHTML)) {
    e.style.background = "var(--Green-color)";
  }
});
function Calc(val) {
  const input = document.getElementById("input");
  if (input.value.length > 20) {
    return;
  }
  if (["+", "-", "*", "/"].includes(val)) {
    if (input.value.trim() === "") {
      return;
    }
    if (["+", "-", "*", "/"].includes(input.value.slice(-1))) {
      return;
    }
    input.value += val;
  } else if (val === "=") {
    if (input.value.trim() === "") {
      return;
    }
    if (["+", "-", "*", "/"].includes(input.value.slice(-1))) {
      return;
    }
    // } else if (val == "+") { // input.value += val; // }
    //  else if (val == "-") { // input.value += val; // }
    // else if (val == "/") { // input.value += val; // }
    // else if (val == "=") { // input.value += val; // }
    //  else if (val == "clear") { // input.value = ""; // }
    try {
      input.style.color = "var(Red-color)";
      let equal = eval(input.value);

      if (!isFinite(equal)) {
        input.value = "Error";
        return;
      }
      input.value = equal;
    } catch (error) {
      input.value = "Error";
    }
  } else if (val === "clear") {
    input.value = "";
  } else {
    if (!/[0-9.]/.test(val)) {
      return;
    }
    input.value += val;
  }
}
