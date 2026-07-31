// btns.forEach((e) => {
//   if (["+", "-", "*", "/", "="].includes(e.innerHTML)) {
//     e.style.background = "var(--Light-First-color)";
//   }
//   if (["C"].includes(e.innerHTML)) {
//     e.style.background = "var(--Red-color)";
//   }
//   if (["="].includes(e.innerHTML)) {
//     e.style.background = "var(--Green-color)";
//   }
// });
const input = document.getElementById("input-screen");

function Calc(val) {
  const operators = ["+", "-", "*", "/"];

  // محدودیت طول
  if (
    input.value.length >= 20 &&
    !["=", "clear", "backspace", "sqrt", "square", "inverse", "neg"].includes(
      val,
    )
  ) {
    return;
  }

  switch (val) {
    // اعداد
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      input.value += val;
      break;

    // اعشار
    case ".":
      let parts = input.value.split(/[\+\-\*\/]/);
      let last = parts[parts.length - 1];

      if (!last.includes(".")) {
        if (last === "") {
          input.value += "0.";
        } else {
          input.value += ".";
        }
      }
      break;

    // عملگرها
    case "+":
    case "-":
    case "*":
    case "/":
      if (input.value === "") return;

      if (operators.includes(input.value.slice(-1))) {
        input.value = input.value.slice(0, -1) + val;
      } else {
        input.value += val;
      }

      break;

    // محاسبه
    case "=":
      if (input.value === "" || operators.includes(input.value.slice(-1)))
        return;

      try {
        let result = eval(input.value);

        if (!isFinite(result)) {
          input.value = "Error";
        } else {
          input.value = result;
        }
      } catch {
        input.value = "Error";
      }

      break;

    // پاک کردن
    case "clear":
      input.value = "";
      break;

    // حذف آخرین کاراکتر
    case "backspace":
      input.value = input.value.slice(0, -1);
      break;

    // مربع
    case "square":
      if (input.value === "") return;

      input.value = Math.pow(Number(input.value), 2);

      break;

    // ریشه دوم
    case "sqrt":
      if (input.value === "") return;

      if (Number(input.value) < 0) {
        input.value = "Error";
        return;
      }

      input.value = Math.sqrt(Number(input.value));

      break;

    // معکوس
    case "inverse":
      if (input.value === "") return;

      if (Number(input.value) === 0) {
        input.value = "Error";
        return;
      }

      input.value = 1 / Number(input.value);

      break;

    // مثبت و منفی
    case "neg":
      if (input.value === "") return;

      input.value = Number(input.value) * -1;

      break;

    // درصد
    case "%":
      if (input.value === "") return;

      input.value = Number(input.value) / 100;

      break;
  }
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    Calc(btn.dataset.value);
  });
});
