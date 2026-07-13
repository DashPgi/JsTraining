const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const showusrscore = document.getElementById("usrscore");
const showpcscore = document.getElementById("pcscore");
  let PcScore = 0;
  let UsrScore = 0;

function sumbitor(e) {
  const usrmove = e;
  const pcmove = Math.floor(Math.random() * (4 - 1) + 1);

  if (
    (usrmove == 1 && pcmove == 2) ||
    (usrmove == 2 && pcmove == 3) ||
    (usrmove == 3 && pcmove == 1)
  ) {
    PcScore += 1;
  } else if (
    (usrmove == 3 && pcmove == 2) ||
    (usrmove == 2 && pcmove == 1) ||
    (usrmove == 1 && pcmove == 3)
  ) {
    UsrScore += 1;
  }
  showpcscore.textContent = PcScore;
  showusrscore.textContent = UsrScore;
}
