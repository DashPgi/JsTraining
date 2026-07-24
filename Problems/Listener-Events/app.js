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

const onlineinput = document.getElementById("onlineinput");
const h1online = document.getElementById("h1-online");

onlineinput.addEventListener("input", () => {
  h1online.textContent = onlineinput.value;
});

const h1change = document.getElementById("h1-change");
const changeinput = document.getElementById("changeinput");

changeinput.addEventListener("change", () => {
  h1change.textContent = changeinput.value;
});

const focusinput = document.getElementById("focusinput");
const h1focus = document.getElementById("h1-focus");

focusinput.addEventListener("focus", () => {
  h1focus.textContent = "You're Focusing";
});

const blurinput = document.getElementById("blurinput");
const h1blur = document.getElementById("h1-Blur");

blurinput.addEventListener("blur", () => {
  h1blur.textContent = "You're not Focusing";
});

// const invalidinput = document.getElementById("invalidinput");
// const h1invalid = document.getElementById("h1-invalid");

// invalidinput.addEventListener("invalid", () => {
//   h1invalid.textContent = "The input is invalid";
// });

const resetbtn = document.getElementById("resetbtn");
const submitbtn = document.getElementById("submitbtn");

const myform = document.querySelector(".myform");

myform.addEventListener("submit", () => {
  console.log("Submited :)");
});
myform.addEventListener("reset", () => {
  console.log("Reseted :(");
});

const loadingpage = document.getElementById("loadingpage");

window.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.style.opacity = "1";
  });
});

window.addEventListener("load", () => {
  loadingpage.style.width = "0";
  loadingpage.style.height = "0";
  loadingpage.style.opacity = 0;
});

const mouse = document.querySelector(".mouse");
mouse.style.display = "block";
mouse.style.opacity = "0";
mouse.style.justifySelf = "center";
mouse.style.width = "30px";
mouse.style.height = "40px";
mouse.style.border = "2px solid var(--Light-Third-color)";
mouse.style.borderRadius = "50px";
mouse.style.padding = "0.5rem 0"
const scroller = document.querySelector(".scroller");
scroller.style.opacity = "0"
scroller.style.border = "2px solid var(--Light-Third-color)";
scroller.style.borderRadius = "50px";

window.addEventListener("scroll", () => {
  mouse.style.opacity = "1";
  mouse.style.visibility = "visible";
  scroller.style.opacity = "1";
  scroller.style.visibility = "visible";
});

window.addEventListener("resize",()=>{
  console.log("You're Resizing This Page")
})

window.addEventListener("beforeunload",()=>{
  console.log("Berood!");
});