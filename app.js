const clickbtn = document.getElementById("clickbtn");

clickbtn.addEventListener("click", () => {
  clickbtn.style.background = "var(--Green-color)";
});

const dblclickbtn = document.getElementById("dblclickbtn");

dblclickbtn.addEventListener("dblclick", () => {
  dblclickbtn.style.background = "var(--Green-color)";
});

const mousedownbtn = document.getElementById("mousedownbtn");

mousedownbtn.addEventListener("mousedown", () => {
  mousedownbtn.style.background = "var(--Green-color)";
});
const mouseupbtn = document.getElementById("mouseupbtn");

mouseupbtn.addEventListener("mouseup", () => {
  mouseupbtn.style.background = "var(--Green-color)";
});

const mousemovebtn = document.getElementById("mousemovebtn");

mousemovebtn.addEventListener("mousemove", () => {
  mousemovebtn.style.background = "var(--Green-color)";
});

const mouseenterbtn = document.getElementById("mouseenterbtn");

mouseenterbtn.addEventListener("mouseenter", () => {
  mouseenterbtn.style.background = "var(--Green-color)";
});

const mouseleavebtn = document.getElementById("mouseleavebtn");

mouseleavebtn.addEventListener("mouseleave", () => {
  mouseleavebtn.style.background = "var(--Green-color)";
});

const mouseoverbtn = document.getElementById("mouseoverbtn");

mouseoverbtn.addEventListener("mouseover", () => {
  mouseoverbtn.style.background = "var(--Green-color)";
});

const mouseoutbtn = document.getElementById("mouseoutbtn");

mouseoutbtn.addEventListener("mouseout", () => {
  mouseoutbtn.style.background = "var(--Green-color)";
});

const contextmenubtn = document.getElementById("contextmenubtn");

contextmenubtn.addEventListener("contextmenu", (e) => {
  contextmenubtn.style.background = "var(--Green-color)";
  e.preventDefault();
  const rightclickchild = document.querySelector(".rightclickchild");
  rightclickchild.style.display = "block";
});

const keydownbtn = document.getElementById("keydownbtn");

keydownbtn.addEventListener("keydown", () => {
  keydownbtn.style.background = "var(--Green-color)";
});

const keyupbtn = document.getElementById("keyupbtn");

keyupbtn.addEventListener("keyup", () => {
  keyupbtn.style.background = "var(--Red-color)";
});

document.addEventListener("keydown", (event) => {
  if (event.key == "u") {
    keydownbtn.style.background = "var(--Green-color)";
  }
  if (event.key == "c") {
    keyupbtn.style.background = "var(--Red-color)";
  }
});
