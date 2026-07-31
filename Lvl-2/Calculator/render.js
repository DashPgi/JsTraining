const screen = document.getElementById("input-screen");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    // پاک کردن کامل
    if (value === "C" || value === "CE") {
      expression = "";
      screen.value = "0";
      return;
    }

    // حذف یک کاراکتر
    if (value === "⌫" || value === "<=") {
      expression = expression.slice(0, -1);
      screen.value = expression || "0";
      return;
    }

    // درصد
    if (value === "%") {
      if (expression) {
        expression = (Number(expression) / 100).toString();
        screen.value = expression;
      }
      return;
    }

    // معکوس عدد
    if (value === "1/x") {
      if (expression) {
        expression = (1 / Number(expression)).toString();
        screen.value = expression;
      }
      return;
    }

    // توان دو
    if (value === "x^2") {
      if (expression) {
        expression = (Number(expression) ** 2).toString();
        screen.value = expression;
      }
      return;
    }

    // ریشه دوم
    if (value === "xroot2") {
      if (expression) {
        expression = Math.sqrt(Number(expression)).toString();
        screen.value = expression;
      }
      return;
    }

    // تغییر علامت
    if (value === "+/-") {
      if (expression) {
        expression = (-Number(expression)).toString();
        screen.value = expression;
      }
      return;
    }

    if (value === "=") {
      console.log("Expression:", expression);
      try {
        let result = eval(
          expression
            .replaceAll("×", "*")
            .replaceAll("÷", "/")
        );

        expression = result.toString();
        screen.value = expression;

      } catch (error) {
        console.log(error);
        screen.value = "Error";
        expression = "";
      }

      return;
    }


    // جلوگیری از چند عملگر پشت سر هم
    const operators = ["+", "-", "×", "÷"];

    if (
      operators.includes(value) &&
      operators.includes(expression.slice(-1))
    ) {
      expression = expression.slice(0, -1);
    }


    // اضافه کردن دکمه
    expression += value;
    screen.value = expression;
  });
});


// پشتیبانی از کیبورد
document.addEventListener("keydown", (e) => {

  const key = e.key;

  if (!isNaN(key) || key === ".") {
    expression += key;
  }

  if (["+", "-", "*", "/"].includes(key)) {
    expression += key;
  }

  if (key === "Enter") {
    try {
      expression = eval(expression).toString();
    } catch {
      expression = "Error";
    }
  }

  if (key === "Backspace") {
    expression = expression.slice(0, -1);
  }

  if (key === "Escape") {
    expression = "";
  }

  screen.value = expression || "0";
});