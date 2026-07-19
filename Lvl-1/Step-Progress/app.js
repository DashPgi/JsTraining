const submitbtn = document.getElementById("submit");
const stepbase = document.querySelector(".Stepsbase");
const nextbtn = document.getElementById("nextbtn");
const previousbtn = document.getElementById("previousbtn");
const steps = [];
const divs = [];
submitbtn.addEventListener("click", () => {
  steps.length = 0;
  divs.length = 0;
  j = 0;
  stepbase.innerHTML = "";

  const inputnumber = Number(document.getElementById("inputnumber").value);
  var count = inputnumber + 2;

  for (i = 0; i < count; i++) {
    var div = document.createElement("div");
    var span = document.createElement("span");
    var para = document.createElement("p");

    if (i == 0) {
      para.textContent = "Start";
    } else if (i == count - 1) {
      para.textContent = "Final";
    } else {
      para.textContent = "Step" + i;
    }

    // if (i % 2 == 0 ) {
    //   const progress = document.createElement("div");
    //   progress.className = "progress";
    //   stepbase.appendChild(progress);
    // }

    div.className = "shapebase";
    span.classList = "step";
    div.appendChild(span);
    div.appendChild(para);
    stepbase.appendChild(div);
    steps.push(span);
    divs.push(div);
  }
});
let j = 0;
nextbtn.addEventListener("click", () => {
  divs[j].style.color = "var(--Blue-color)";
  steps[j].style.padding = "0.5rem 0.5rem";
  steps[j].style.background = "var(--Blue-color)";
  steps[j].style.border = "5px solid var(--Green-color)";
  j++;
});

previousbtn.addEventListener("click", () => {
  if(j!=0){  j--;}
  divs[j].style.color = "var(--Purple-color)";
  steps[j].style.padding = "0 0";
  steps[j].style.background = "var(--Light-First-color)";
  steps[j].style.border = "5px solid var(--Purple-color)";
});
