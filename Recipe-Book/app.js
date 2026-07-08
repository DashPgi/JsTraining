const Submit_btn = document.querySelector(".Submit_btn");

Submit_btn.addEventListener("click", () => {
  const Card = document.querySelector(".recipe-Card");
  const HeadValue = document.querySelector(".HeadValue").value;
  const ParaValue = document.querySelector(".ParaValue").value;
  const ImageValue = document.querySelector(".imgValue");

  let recipe_Card = document.createElement("div");
  recipe_Card.className = "recipe-Card";
  let img = document.createElement("img");
  const file = ImageValue.files[0];
  if (ImageValue.files.length > 0) {
    const file = ImageValue.files[0];
    img.src = URL.createObjectURL(file);
  }
  let Article = document.createElement("article");
  let headt = document.createElement("h1");
  headt.textContent = HeadValue;
  let Parag = document.createElement("p");
  Parag.textContent = ParaValue;
  Article.append(headt, Parag);
  let button = document.createElement("button");
  let buttonType = document.createTextNode("View Recipe");
  button.className = "view-recipe-btn";
  button.append(buttonType);
  let Main = document.querySelector("main");

  recipe_Card.append(img, Article, button);
  Main.appendChild(recipe_Card);
});

const baseadd = document.querySelector(".Baseadd");
baseadd.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((el) => {
    if (el.style.display == "none") {
      Submit_btn.style.display = "block";
      el.style.display = "block";
      el.style.opacity = 100;
    } else {
      Submit_btn.style.display = "none";
      el.style.display = "none";
      el.style.opacity = 0;
    }
  });
});

const In = document.querySelector(".input");
const showhide = document.querySelector(".showadd");
showhide.addEventListener("click",() => {
  if(In.style.opacity == 0){
      In.style.opacity = 100;
  }else{
      In.style.opacity = 0;
  }
})