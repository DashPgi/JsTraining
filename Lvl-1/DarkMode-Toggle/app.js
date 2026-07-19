const togglebtn = document.getElementById("togglebtn");
const btnbase = document.querySelector(".btnbase");
const body = document.querySelector("body");
const messagebox = document.querySelector(".messagebox");
const headtext = document.getElementById("headtext");
const Titlte = document.querySelector("title");



let isDragging = false;
let offsetX = 0;

togglebtn.addEventListener("mousedown", (e) => {
  isDragging = true;

  offsetX = e.clientX - togglebtn.offsetLeft;

  togglebtn.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let x = e.clientX - offsetX;

  const gap = 20;

  const minX = gap;
  const maxX = btnbase.clientWidth - togglebtn.offsetWidth - gap;

  x = Math.max(minX, Math.min(x, maxX));

  togglebtn.style.left = x + "px";

  if (x == maxX) {
    Titlte.textContent = "LightMode Toggle";
    headtext.textContent = "Guten Nacht";
    messagebox.classList.remove("Sun");
    messagebox.classList.add("Moon");
    togglebtn.classList.toggle("animation");
    togglebtn.classList.remove("Sun");
    togglebtn.classList.add("Moon");
    body.style.background = "var(--First-color)";
  } else if (x == minX) {
    Titlte.textContent = "Darkmode Toggle";
    headtext.textContent = "Guten Morgen";
    messagebox.classList.remove("Moon");
    messagebox.classList.add("Sun");
    togglebtn.classList.toggle("animation");
    togglebtn.classList.remove("Moon");
    togglebtn.classList.add("Sun");
    body.style.background = "var(--Light-Third-color)";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  togglebtn.style.cursor = "grab";
});
