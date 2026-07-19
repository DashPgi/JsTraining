const button = document.getElementById("button-container");
const cube = document.getElementById("cube");
const Textshow = document.querySelector(".Textshow");



function Roller(number) {
  const classes = ["yek", "do", "se", "char", "panj", "shish"];
  cube.classList.remove(...classes);
  switch (number) {
    case 1:
      cube.classList.add("yek");
      break;
    case 2:
      cube.classList.add("do");
      break;
    case 3:
      cube.classList.add("se");
      break;
    case 4:
      cube.classList.add("char");
      break;
    case 5:
      cube.classList.add("panj");
      break;
    case 6:
      cube.classList.add("shish");
      break;
  }
}

button.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 6) + 1;
  Textshow.textContent = number
  cube.classList.add("animation");
    setTimeout(() => {
    cube.classList.remove("animation");
  }, 500);
  Roller(number);
});