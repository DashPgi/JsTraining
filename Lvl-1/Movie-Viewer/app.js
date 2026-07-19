const loarderbtn = document.getElementById("VideoLoader");
const videoframe = document.querySelector(".videoframe");
const Videoprojector = document.querySelector(".videoprojector");
const closebtn = document.getElementById("closebtn");

loarderbtn.addEventListener("click", () => {
  Videoprojector.style.display = "flex";
  Videoprojector.style.opacity = 1;

  const ulrinput = document.getElementById("urlinput").value;
  
  videoframe.src = ulrinput;
  videoframe.load();
});

closebtn.addEventListener("click", () => {
  Videoprojector.style.display = "none";
  Videoprojector.style.opacity = 0;
});
