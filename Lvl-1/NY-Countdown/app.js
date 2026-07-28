const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const nowruzTime = new Date("March 21, 2027 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = nowruzTime - now;

  if (gap <= 0) {
    dayEl.innerText = "0";
    hourEl.innerText = "0";
    minuteEl.innerText = "0";
    secondEl.innerText = "0";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(updateCountdown, 1000);
}
