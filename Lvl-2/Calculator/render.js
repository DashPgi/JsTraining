// const { ipcRenderer } = require("electron");

const input = document.getElementById("input-screen");
const btns = document.querySelectorAll(".btn");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    input.textContent = e.textContent;
  });
  if(e.textContent == "+"){
    
  }
});
