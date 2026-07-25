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
mouse.style.padding = "0.5rem 0";
const scroller = document.querySelector(".scroller");
scroller.style.opacity = "0";
scroller.style.border = "2px solid var(--Light-Third-color)";
scroller.style.borderRadius = "50px";

window.addEventListener("scroll", () => {
  mouse.style.opacity = "1";
  mouse.style.visibility = "visible";
  scroller.style.opacity = "1";
  scroller.style.visibility = "visible";
});

window.addEventListener("resize", () => {
  console.log("You're Resizing This Page");
});

window.addEventListener("beforeunload", () => {
  console.log("Berood!");
});

const dragel = document.getElementById("dragel");
const dragel2 = document.getElementById("dragel2");

dragel.addEventListener("dragstart", () => {
  dragel.style.background = "var(--Green-color)";
});

dragel2.addEventListener("drag", () => {
  dragel2.style.background = "var(--Blue-color)";
});

dragel.addEventListener("dragend", () => {
  dragel.style.background = "var(--Purple-color)";
});

const Enterarea = document.getElementById("Enterarea");

Enterarea.addEventListener("dragenter", () => {
  Enterarea.style.border = "5px solid var(--Green-color)";
});

const Overarea = document.getElementById("Overarea");

Overarea.addEventListener("dragover", () => {
  Overarea.style.border = "5px solid var(--Blue-color)";
});

const leavearea = document.getElementById("leavearea");

leavearea.addEventListener("dragleave", () => {
  leavearea.style.border = "5px solid var(--Red-color)";
});

const touchstart = document.getElementById("touchstart");

touchstart.addEventListener("touchstart", () => {
  touchstart.style.background = "var(--Green-color)";
});

const touchmove = document.getElementById("touchmove");

touchmove.addEventListener("touchmove", () => {
  touchmove.style.background = "var(--Green-color)";
});

const touchend = document.getElementById("touchend");

touchend.addEventListener("touchend", () => {
  touchend.style.background = "var(--Green-color)";
});

const touchcancel = document.getElementById("touchcancel");

touchcancel.addEventListener("touchcancel", () => {
  touchcancel.style.background = "var(--Green-color)";
});

const pointerdown = document.getElementById("pointerdown");

pointerdown.addEventListener("pointerdown", () => {
  pointerdown.style.background = "var(--Purple-color)";
});

const pointerup = document.getElementById("pointerup");

pointerup.addEventListener("pointerup", () => {
  pointerup.style.background = "var(--Purple-color)";
});

const pointermove = document.getElementById("pointermove");

pointermove.addEventListener("pointermove", () => {
  pointermove.style.background = "var(--Purple-color)";
});

const pointerenter = document.getElementById("pointerenter");

pointerenter.addEventListener("pointerenter", () => {
  pointerenter.style.background = "var(--Purple-color)";
});

const pointerleave = document.getElementById("pointerleave");

pointerleave.addEventListener("pointerleave", () => {
  pointerleave.style.background = "var(--Purple-color)";
});

const pointercancel = document.getElementById("pointercancel");

pointercancel.addEventListener("pointercancel", () => {
  pointercancel.style.background = "var(--Purple-color)";
});

const clipboard = document.getElementById("clipboard");
const log = document.querySelector(".log");

clipboard.addEventListener("copy", () => {
  log.textContent = "Copied!";
});

clipboard.addEventListener("paste", () => {
  log.textContent = "Pasted";
});

clipboard.addEventListener("cut", () => {
  log.textContent = "Cuted";
});

const video = document.querySelector("#video");
const icon = document.querySelector("#event-icon");

function showEventIcon(type) {
  const icons = {
    play: "▶️",
    pause: "⏸️",
    ended: "🏁",
    volumechange: "🔊",
    timeupdate: "⏩",
  };

  icon.innerHTML = icons[type] || "🎬";

  icon.classList.remove("show");

  void icon.offsetWidth;

  icon.classList.add("show");
}

video.addEventListener("play", () => {
  showEventIcon("play");
});

video.addEventListener("pause", () => {
  showEventIcon("pause");
});

video.addEventListener("ended", () => {
  showEventIcon("ended");
});

video.addEventListener("volumechange", () => {
  showEventIcon("volumechange");
});

// video.addEventListener("timeupdate", () => {
//   showEventIcon("timeupdate");
// });
