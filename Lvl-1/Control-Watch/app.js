const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");

const Times = document.querySelectorAll(".Time");

let cornometr;

let ms = 0;
let Seoncds = 0;
let Minute = 0;
let Hour = 0;
startbtn.addEventListener("click", () => {
  cornometr = setInterval(() => {
    ms++;
    if (ms <= 100) {
      Times[6].textContent = ms.toString().padStart(2,"0");;
    } else {
      ms = 0;
      Seoncds++;
      if (Seoncds < 60) {
        Times[4].textContent = Seoncds.toString().padStart(2,"0");;
      } else {
        Seoncds = 0;
        Minute++;
        if (Minute < 60) {
          Times[2].textContent = Minute.toString().padStart(2,"0");;
        } else {
          Minute = 0;
          Hour++;
          if (Hour < 25) {
            Times[0].textContent = Hour;
          } else {
            ms = 0;
            Seoncds = 0;
            Minute = 0;
            Hour = 0;

            Times[0].textContent = Hour;
            Times[2].textContent = Minute;
            Times[4].textContent = Seoncds;
            Times[6].textContent = ms;
          }
        }
      }
    }
  }, 10);
});


stopbtn.addEventListener("click",() => {
  clearInterval(cornometr)
});

resetbtn.addEventListener("click",()=>{
    clearInterval(cornometr);
    cornometr = null;

    ms = 0;
    Seconds = 0;
    Minute = 0;
    Hour = 0;

    Times[0].textContent = "00";
    Times[2].textContent = "00";
    Times[4].textContent = "00";
    Times[6].textContent = "00";
});