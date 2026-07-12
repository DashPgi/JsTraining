const Pomodoro = document.getElementById("Pomodoro");
const StartBtn = document.getElementById("start-btn");
const StopBtn = document.getElementById("stop-btn");
const ResetBtn = document.getElementById("reset-btn");
const timeInput = document.getElementById("timeinput");
let timer;
StartBtn.addEventListener("click", () => {
  var [minute,seconds ] = timeInput.value.split(":");

  timer = setInterval(() => {
    if(seconds != 0){
      seconds --
    }else{
      minute --
      seconds += 59
    }
    Pomodoro.textContent = minute + ":" + seconds
  },1000);
});
StopBtn.addEventListener("click",()=>{
  setTimeout(() => {
          clearInterval(timer);
  }, 1);
})
ResetBtn.addEventListener("click", () => {
  Pomodoro.textContent = "00:00";
  timeValue = 0;
});
